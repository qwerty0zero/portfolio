export const languages = {
  ru: "Русский",
  en: "English",
  pl: "Polski",
  uk: "Українська",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "ru";

export const locales = Object.keys(languages) as Lang[];
