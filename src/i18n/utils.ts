import {
  defaultLang,
  type Lang,
  languages,
  locales,
  ogLocales,
} from "@i18n/languages";
import { ui, type UIKey } from "@i18n/ui";

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

export function getCleanPathname(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && segments[0] in languages) {
    segments.shift();
  }
  return `/${segments.join("/")}`;
}

export function getAlternateOgLocales(currentLang: Lang): string[] {
  return locales
    .filter((lang) => lang !== currentLang)
    .map((lang) => ogLocales[lang]);
}

export function getI18nStaticPaths() {
  return Object.keys(languages).map((code) => {
    const lang = code as Lang;
    return {
      params: {
        lang: lang === defaultLang ? undefined : lang,
      },
    };
  });
}

export function resolveLang(langParam?: string): Lang {
  return langParam && langParam in languages
    ? (langParam as Lang)
    : defaultLang;
}
