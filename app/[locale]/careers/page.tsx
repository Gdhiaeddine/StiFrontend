import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CareerHero from "../../components/careers/CareerHero";
import WhyJoin from "../../components/careers/WhyJoin";
import CompanyCulture from "../../components/careers/CompanyCulture";
import JobSearch from "../../components/careers/JobSearch";
import RecruitmentTimeline from "../../components/careers/RecruitmentTimeline";
import ApplicationForm from "../../components/careers/ApplicationForm";
import CareerFAQ from "../../components/careers/CareerFAQ";
import FinalCTA from "../../components/FinalCTA";

export const metadata: Metadata = {
  title: "Careers | Join STI Official Ooredoo Distributor Algeria",
  description:
    "Explore career opportunities at SARL Smart Technologie Innovation (STI). Join our growing team and build your future with an official Ooredoo distributor specializing in mobile recharge credit and prepaid SIM card distribution across Algeria.",
  keywords: [
    "Careers STI",
    "Jobs Algeria",
    "Ooredoo Distributor Jobs",
    "Telecom Careers Algeria",
    "Sales Jobs Algeria",
    "Warehouse Jobs Algeria",
    "Customer Support Jobs",
    "Distribution Careers",
    "Apply for Jobs Algeria",
    "STI Recruitment",
  ],
  openGraph: {
    title: "Careers | Join STI Official Ooredoo Distributor Algeria",
    description:
      "Explore career opportunities at SARL Smart Technologie Innovation (STI). Join our growing team and build your future with an official Ooredoo distributor.",
    images: ["/assets/hero.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Join STI Official Ooredoo Distributor Algeria",
    description:
      "Explore career opportunities at SARL Smart Technologie Innovation (STI). Join our growing team.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sti-dz.com/careers",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SARL Smart Technologie Innovation",
  alternateName: "STI",
  url: "https://sti-dz.com",
  logo: "https://sti-dz.com/logo.png",
  description:
    "Official Ooredoo distributor specializing in mobile recharge credit and prepaid SIM card distribution across Algeria.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "DZ",
  },
};

const jobPostingSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Sales Representative",
    description: "Drive sales growth by building relationships with retailers and business partners across your assigned territory.",
    datePosted: "2026-05-20",
    validThrough: "2026-06-30",
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "SARL Smart Technologie Innovation",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Algiers",
        addressCountry: "DZ",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Distribution Coordinator",
    description: "Coordinate product distribution operations ensuring timely delivery to partners across multiple provinces.",
    datePosted: "2026-05-20",
    validThrough: "2026-06-30",
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "SARL Smart Technologie Innovation",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Oran",
        addressCountry: "DZ",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Warehouse Assistant",
    description: "Support warehouse operations including inventory management, order processing, and product organization.",
    datePosted: "2026-05-20",
    validThrough: "2026-06-30",
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "SARL Smart Technologie Innovation",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Algiers",
        addressCountry: "DZ",
      },
    },
  },
];

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      {jobPostingSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <Navbar />
      <main>
        <CareerHero />
        <WhyJoin />
        <CompanyCulture />
        <JobSearch />
        <RecruitmentTimeline />
        <ApplicationForm />
        <CareerFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}