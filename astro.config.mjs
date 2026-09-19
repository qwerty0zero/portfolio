import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://portfolio-ddn.pages.dev",
  trailingSlash: "never",
  output: "static",
  compressHTML: true,

  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "en", "pl", "uk"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "ru",
        locales: {
          ru: "ru",
          en: "en",
          pl: "pl",
          uk: "uk",
        },
      },
    }),
  ],

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
