"use client";

import { createContext, useContext, ReactNode } from "react";

interface LocaleContextType {
  locale: string;
  dir: "ltr" | "rtl";
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  dir: "ltr",
});

export function LocaleProvider({
  locale,
  children,
}: {
  locale: string;
  children: ReactNode;
}) {
  const dir = locale === "ar" ? "rtl" : "ltr";
  
  return (
    <LocaleContext.Provider value={{ locale, dir }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}