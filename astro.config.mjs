import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://project-tech.org",
  integrations: [tailwind(), react(), sitemap()],
  vite: {
    server: {
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
      },
    },
    build: {
      assetsInlineLimit: 0, // Prevent inlining assets
    },
  },
});
