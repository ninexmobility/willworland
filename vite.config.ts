import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { posts } from "./src/data/posts";

const SITE_URL = "https://willworland.com";

function generateRssXml(): string {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const items = sorted
    .map(
      (p) => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${SITE_URL}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description><![CDATA[${p.summary}]]></description>
    </item>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Will Worland</title>
    <link>${SITE_URL}</link>
    <description>Thoughts on projects, tools, and whatever else is on my mind.</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;
}

function rssPlugin() {
  return {
    name: "rss-generator",
    buildStart() {
      writeFileSync(
        fileURLToPath(new URL("./public/rss.xml", import.meta.url)),
        generateRssXml()
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), rssPlugin()],
  // Uncomment if deploying to GitHub Pages at username.github.io/repo-name
  // base: '/repo-name/',
  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router", "react-router-dom"],
          mui: ["@mui/material", "@mui/icons-material", "@emotion/react", "@emotion/styled"],
          state: ["@reduxjs/toolkit", "react-redux", "@tanstack/react-query"],
        },
      },
    },
  },
});
