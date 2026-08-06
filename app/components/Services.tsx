"use client";

import { ArrowRight, Smartphone, CardSim, Building2, Wifi, Headphones, BarChart3 } from "lucide-react";
import { useScrollReveal } from "../hooks";

const services = [
  {
    icon: <Smartphone size={24} />,
    title: "Mobile Recharge Distribution",
    description: "Nationwide distribution of Ooredoo recharge vouchers, digital top-ups, and mobile credit solutions for retailers and businesses.",
  },
  {
    icon: <CardSim size={24} />,
    title: "SIM Card Activation",
    description: "Fast and reliable SIM activation services for prepaid and postpaid plans with full registration support.",
  },
  {
    icon: <Building2 size={24} />,
    title: "Enterprise Connectivity",
    description: "Dedicated internet lines, MPLS networking, and corporate communication solutions for businesses of all sizes.",
  },
  {
    icon: <Wifi size={24} />,
    title: "Internet & Fiber Solutions",
    description: "High-speed broadband, fiber optic, and wireless internet packages for homes and offices across Algeria.",
  },
  {
    icon: <Headphones size={24} />,
    title: "Technical Support",
    description: "Professional customer support and technical assistance for all Ooredoo products and enterprise solutions.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Digital Business Solutions",
    description: "IoT, cloud services, digital transformation consulting, and smart business enablement technologies.",
  },
];

function ServiceCard({ icon, title, description, index }: { icon: React.ReactNode; title: string; description: string; index: number }) {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_12px_48px_rgba(200,16,46,0.08)] hover:-translate-y-1 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Red accent line */}
      <div className="absolute left-0 top-0 h-[3px] w-0 bg-red-primary transition-all duration-500 group-hover:w-full" />

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-primary/8 text-red-primary transition-colors group-hover:bg-red-primary group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-3 text-lg font-bold text-gray-900" style={{ fontFamily: "var(--font-manrope)" }}>
        {title}
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-gray-500">
        {description}
      </p>
      <a
        href="#contact"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-primary transition-colors hover:text-red-accent"
      >
        Learn More
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}

export default function Services() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="solutions" className="py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            What We Do
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
            Complete Telecommunications Solutions
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            From mobile distribution to enterprise connectivity, STI delivers comprehensive
            telecom services tailored for the Algerian market.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
