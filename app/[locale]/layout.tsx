import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "../globals.css";
import Providers from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "STI - Smart Technologie Innovation | Official Ooredoo Distributor Algeria",
  description:
    "SARL Smart Technologie Innovation is the official Ooredoo distributor in Algeria, providing mobile recharge distribution, SIM activation, enterprise connectivity, internet solutions, routers, and digital transformation services.",
  keywords: [
    "Ooredoo Algeria",
    "STI",
    "Smart Technologie Innovation",
    "telecom distributor Algeria",
    "mobile recharge",
    "SIM activation",
    "enterprise connectivity",
    "internet solutions",
    "router",
    "digital transformation",
  ],
  openGraph: {
    title: "STI - Smart Technologie Innovation | Official Ooredoo Distributor",
    description:
      "Official Ooredoo distributor in Algeria. Enterprise connectivity, mobile solutions, and digital transformation.",
    type: "website",
    locale: "en_US",
    siteName: "STI - Smart Technologie Innovation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dir = locale === "ar" ? "rtl" : "ltr";
  
  return (
    <html lang={locale} dir={dir} className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen">
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}