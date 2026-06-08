"use client";

import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react";
import { LanguageCode, languages, translations } from "@/data/translations";

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  dir: "ltr" | "rtl";
  t: (typeof translations)[LanguageCode];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguageState] = useState<LanguageCode>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("clickmyze-language") as LanguageCode | null;
    if (saved && saved in translations) setLanguageState(saved);
  }, []);

  const currentLanguage = languages.find((item) => item.code === language) ?? languages[0];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = currentLanguage.dir;
    document.body.dataset.lang = language;
  }, [currentLanguage.dir, language]);

  const setLanguage = (nextLanguage: LanguageCode) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("clickmyze-language", nextLanguage);
  };

  const value = useMemo(
    () => ({ language, setLanguage, dir: currentLanguage.dir, t: translations[language] }),
    [currentLanguage.dir, language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
