"use client";

import { ReactNode } from "react";
import { LocaleProvider } from "./locale-context";

export default function Providers({
  locale,
  children,
}: {
  locale: string;
  children: ReactNode;
}) {
  return <LocaleProvider locale={locale}>{children}</LocaleProvider>;
}