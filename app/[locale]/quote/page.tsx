import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import QuoteHero from "../../components/quote/QuoteHero";
import QuoteProcess from "../../components/quote/QuoteProcess";
import QuoteRequestForm from "../../components/quote/QuoteRequestForm";
import PartnerAdvantages from "../../components/quote/PartnerAdvantages";
import FAQAccordion from "../../components/quote/FAQAccordion";
import FinalCTA from "../../components/FinalCTA";

export const metadata: Metadata = {
  title: "Request a Quote | STI Official Ooredoo Distributor Algeria",
  description:
    "Request a personalized quotation from SARL Smart Technologie Innovation (STI), the official Ooredoo distributor in Algeria. Get competitive pricing for mobile recharge credit, prepaid SIM cards, wholesale solutions, and business partnerships.",
  keywords: [
    "STI",
    "Ooredoo Distributor",
    "Request Quote Algeria",
    "Mobile Recharge Credit",
    "Prepaid SIM Cards",
    "Wholesale Distribution",
    "Business Quote Algeria",
    "Telecom Wholesale",
  ],
  openGraph: {
    title: "Request a Quote | STI Official Ooredoo Distributor Algeria",
    description:
      "Request a personalized quotation from SARL Smart Technologie Innovation (STI), the official Ooredoo distributor in Algeria.",
    images: ["/assets/hero.png"],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function QuotePage() {
  return (
    <>
      <Navbar />
      <main>
        <QuoteHero />
        <QuoteProcess />
        <QuoteRequestForm />
        <PartnerAdvantages />
        <FAQAccordion />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}