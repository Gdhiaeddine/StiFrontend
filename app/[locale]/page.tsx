import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Partnership from "../components/Partnership";
import Statistics from "../components/Statistics";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Products from "../components/Products";
import Enterprise from "../components/Enterprise";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import TrustedPartners from "../components/TrustedPartners";
import LatestNews from "../components/LatestNews";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partnership />
        <Statistics />
        <Services />
        <WhyChoose />
        <Products />
        <Enterprise />
        <Process />
        <Testimonials />
        <TrustedPartners />
        <LatestNews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}