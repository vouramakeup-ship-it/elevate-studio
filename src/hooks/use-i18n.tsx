import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { es, type TranslationKey } from "@/locales/es";
import { en } from "@/locales/en";

export type Lang = "es" | "en";
/** Texto bilingüe usado en los archivos de datos. */
export type Localized = { es: string; en: string };

const dictionaries = { es, en } as const;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
  tl: (value: Localized) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const stored = window.localStorage.getItem("lang");
    if (stored === "es" || stored === "en") setLangState(stored);
    else if (navigator.language.toLowerCase().startsWith("en")) setLangState("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("lang", l);
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang(lang === "es" ? "en" : "es"),
      t: (key) => dictionaries[lang][key] ?? key,
      tl: (v) => v?.[lang] ?? "",
    }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
