#!/usr/bin/env node
/**
 * One-off helper to capture screenshots of project sites into public/.
 * Run as needed: `node scripts/capture-project-screenshots.mjs`
 *
 * Edit the TARGETS list below to add or update screenshots.
 */

import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(import.meta.url), "../..");
const PUBLIC = join(ROOT, "public");

const ALL_TARGETS = [
  { url: "https://oakandashtech.com", output: "oakandashtech-screenshot.png" },
  { url: "https://neuronomadstudios.com", output: "neuronomadstudios-screenshot.png" },
  {
    url: "https://mobilauncher.com",
    output: "mobilauncher-screenshot.png",
  },
  {
    url: "https://phacilitate.app",
    output: "phacilitate-screenshot.png",
  },
];

// Optional filter: `node scripts/capture-project-screenshots.mjs oakandash neuronomad`
const only = process.argv.slice(2);
const TARGETS = only.length
  ? ALL_TARGETS.filter((t) => only.some((o) => t.output.includes(o)))
  : ALL_TARGETS;

const puppeteer = (await import("puppeteer")).default;
const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  for (const { url, output } of TARGETS) {
    console.log(`• Capturing ${url}`);
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: "networkidle2", timeout: 60_000 });
    await page.evaluateHandle("document.fonts.ready");
    // Dismiss cookie/consent banners (Decline / Reject All) so they don't cover the shot
    await page.evaluate(() => {
      for (const b of document.querySelectorAll("button, a")) {
        if (/^\s*(decline|reject all)\s*$/i.test(b.textContent || "")) {
          b.click();
          break;
        }
      }
    });
    // Brief settle so async hero animations (and banner dismissal) finish
    await new Promise((res) => setTimeout(res, 1800));
    const path = join(PUBLIC, output);
    await page.screenshot({ path, type: "png", clip: { x: 0, y: 0, width: 1440, height: 900 } });
    console.log(`  → public/${output}`);
    await page.close();
  }
} finally {
  await browser.close();
}
