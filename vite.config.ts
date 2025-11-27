import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Uncomment if deploying to GitHub Pages at username.github.io/repo-name
  // base: '/repo-name/',
});
