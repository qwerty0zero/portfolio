import { defaultLang, type Lang, languages } from "./languages";
import { ui, type UIKey } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang && lang in languages) {
    return lang as Lang;
  }
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    const langDict = ui[lang] as Record<UIKey, string>;
    const defaultDict = ui[defaultLang] as Record<UIKey, string>;
    return langDict[key] || defaultDict[key] || key;
  };
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path = "/"): string {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    if (lang === defaultLang) {
      return cleanPath;
    }
    return `/${lang}${cleanPath === "/" ? "" : cleanPath}`;
  };
}
