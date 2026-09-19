import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://portfolio-ddn.pages.dev",
  trailingSlash: "never",
  output: "static",
  compressHTML: true,

  integrations: [sitemap()],

  build: {
    inlineStylesheets: "always",
  },

  vite: {
    build: {
      minify: true,
      cssCodeSplit: false,
    },
  },
});
