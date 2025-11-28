import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
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
