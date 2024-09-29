import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const dev = process.env.NODE_ENV === "development";

// https://github.com/crxjs/vite-4-react
// https://github.com/JohnBra/vite-web-extension
// https://mk668a.com/en/blog/Chrome%20Extension%20with%20React%20+%20CRXJS%20+%20Vite%20+%20Docker/
const manifest = defineManifest({
  manifest_version: 3,
  name: dev ? "Catch Extension [dev]" : "Catch Extension",
  version: "1.0.0",
  action: {
    default_title: dev ? "Catch Extension App [dev]" : "Catch Extension App",
  },
  background: {
    service_worker: "src/background.ts",
    type: "module",
  },
  options_page: "options.html",
  permissions: [
    "activeTab",
    "background",
    // "bookmarks",
    "contextMenus",
    // "history",
    "scripting",
    "storage",
    "tabs",
  ],
});

export default defineConfig({
  plugins: [react(), crx({ manifest })],
  // https://github.com/crxjs/chrome-extension-tools/issues/696#issuecomment-1526138970
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
});
