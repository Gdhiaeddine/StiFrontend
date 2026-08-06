import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/about/Hero";
import CompanyStory from "../components/about/CompanyStory";
import MissionVision from "../components/about/MissionVision";
import WhyChoose from "../components/about/WhyChoose";
import Timeline from "../components/about/Timeline";
import Leadership from "../components/about/Leadership";
import Statistics from "../components/about/Statistics";
import Expertise from "../components/about/Expertise";
import Partnership from "../components/about/Partnership";
import Process from "../components/about/Process";
import Gallery from "../components/about/Gallery";
import Testimonials from "../components/about/Testimonials";
import FAQ from "../components/about/FAQ";
import CTA from "../components/about/CTA";

export const metadata: Metadata = {
  title: "About STI | Official Ooredoo Distributor Algeria",
  description:
    "Learn more about SARL Smart Technologie Innovation (STI), official Ooredoo distributor providing innovative telecommunications, enterprise connectivity, SIM management and digital services throughout Algeria.",
  keywords: [
    "STI",
    "Ooredoo Distributor",
    "Telecommunication Algeria",
    "SIM Distribution",
    "Enterprise Connectivity",
    "Telecom Company Algeria",
  ],
  openGraph: {
    title: "About STI",
    description:
      "Learn more about SARL Smart Technologie Innovation (STI), official Ooredoo distributor providing innovative telecommunications throughout Algeria.",
    images: ["/assets/hero.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CompanyStory />
        <MissionVision />
        <WhyChoose />
        <Timeline />
        <Leadership />
        <Statistics />
        <Expertise />
        <Partnership />
        <Process />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
