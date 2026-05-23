#!/usr/bin/env node
/**
 * Generates dist/resume.pdf from the resume-print page.
 *
 * Flow:
 *   1. Spins up a local http server pointing at ./dist
 *   2. Launches Puppeteer, navigates to /resume-print
 *   3. Prints the page to a PDF, saves to dist/resume.pdf
 *   4. Tears everything down
 *
 * Skipped (with a log line, not a failure) if SKIP_RESUME_PDF=1 — useful
 * for environments where chromium is unavailable (e.g. a first-time
 * developer install before running `npm run resume:chrome`).
 *
 * Run as a postbuild step from package.json: `npm run build`.
 */

import { createServer } from "node:http";
import { stat, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(import.meta.url), "../..");
const DIST = join(ROOT, "dist");
const OUTPUT_PDF = join(DIST, "resume.pdf");
const TARGET_PATH = "/resume-print";

if (process.env.SKIP_RESUME_PDF === "1") {
  console.log("• Skipping resume PDF (SKIP_RESUME_PDF=1)");
  process.exit(0);
}

if (!existsSync(DIST)) {
  console.error("✗ dist/ not found — run `astro build` first.");
  process.exit(1);
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
};

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? "/", "http://localhost");
    let p = decodeURIComponent(url.pathname);
    if (p.endsWith("/")) p += "index.html";

    let filePath = join(DIST, p);
    if (!existsSync(filePath)) {
      // Astro builds pages as /name/index.html — try that.
      const alt = join(DIST, p.replace(/\/?$/, ""), "index.html");
      if (existsSync(alt)) filePath = alt;
    }

    try {
      const s = await stat(filePath);
      if (s.isDirectory()) {
        filePath = join(filePath, "index.html");
      }
    } catch {
      res.statusCode = 404;
      res.end("Not found");
      return;
    }

    const data = await readFile(filePath);
    res.setHeader(
      "Content-Type",
      MIME[extname(filePath).toLowerCase()] ?? "application/octet-stream",
    );
    res.end(data);
  } catch (err) {
    res.statusCode = 500;
    res.end(String(err));
  }
});

const port = await new Promise((res) => {
  server.listen(0, "127.0.0.1", () => {
    const addr = server.address();
    res(typeof addr === "object" && addr ? addr.port : 0);
  });
});

const baseUrl = `http://127.0.0.1:${port}`;
console.log(`• Static server listening on ${baseUrl}`);

let browser;
try {
  const puppeteer = (await import("puppeteer")).default;
  browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  const target = `${baseUrl}${TARGET_PATH}`;
  console.log(`• Rendering ${target}`);
  await page.goto(target, { waitUntil: "networkidle0", timeout: 60_000 });

  // Wait for fonts to load so the PDF renders with the right typography.
  await page.evaluateHandle("document.fonts.ready");

  await page.pdf({
    path: OUTPUT_PDF,
    format: "Letter",
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
    printBackground: true,
    preferCSSPageSize: true,
  });

  console.log(`✓ Wrote ${OUTPUT_PDF}`);
} catch (err) {
  if (
    err &&
    typeof err === "object" &&
    "message" in err &&
    String(err.message).includes("Could not find")
  ) {
    console.warn(
      "⚠ Puppeteer can't find a Chromium install. Run `npx puppeteer browsers install chrome` once, then re-run the build.",
    );
    console.warn(
      "  Skipping PDF generation for this build — site will deploy without resume.pdf.",
    );
    process.exitCode = 0;
  } else {
    console.error("✗ Failed to generate resume.pdf:", err);
    process.exitCode = 1;
  }
} finally {
  await browser?.close().catch(() => {});
  await new Promise((res) => server.close(() => res()));
}
