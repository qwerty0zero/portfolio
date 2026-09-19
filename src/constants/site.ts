/**
 * Global site and author constants.
 * Single source of truth for technical and contact metadata.
 */
export const SITE = {
  url: "https://portfolio-ddn.pages.dev",
  author: "ihor kuhel",
  nickname: "iBiltaz",
  role: "Software Developer",
  description:
    "Personal portfolio of ihor kuhel (iBiltaz) — High-performance web architecture, modern frontend engineering, Astro, TypeScript, and clean code.",
  email: "ihor.kuhel.personal@gmail.com",
  github: "https://github.com/qwerty0zero",
  linkedin: "https://www.linkedin.com/in/ihor-kuhel-993399167/",
  themeColorLight: "#fafafa",
  themeColorDark: "#0c0d0e",
} as const;

export type SiteConfig = typeof SITE;
