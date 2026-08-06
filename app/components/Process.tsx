"use client";

import { Handshake, Package, Truck, Headphones } from "lucide-react";
import { useScrollReveal } from "../hooks";

const steps = [
  { num: "01", icon: <Handshake size={22} />, title: "Partner Onboarding", description: "Become an authorized reseller with training, tools, and dedicated support from day one." },
  { num: "02", icon: <Package size={22} />, title: "Product Sourcing", description: "Access the full range of Ooredoo SIM cards, recharge vouchers, devices, and plans." },
  { num: "03", icon: <Truck size={22} />, title: "Distribution & Delivery", description: "Fast and reliable delivery to retailers and businesses across all 58 provinces." },
  { num: "04", icon: <Headphones size={22} />, title: "Ongoing Support", description: "Continuous account management, technical assistance, and performance reporting." },
];

function StepCard({ num, icon, title, description, index }: { num: string; icon: React.ReactNode; title: string; description: string; index: number }) {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center text-center transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div className="absolute left-[calc(50%+40px)] top-10 hidden h-[2px] w-[calc(100%-80px)] bg-gradient-to-r from-red-primary/30 to-red-primary/10 lg:block" />
      )}

      <div className="relative mb-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-100 bg-white text-red-primary shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          {icon}
        </div>
        <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-primary text-[11px] font-bold text-white">
          {num}
        </span>
      </div>
      <h3 className="mb-2 text-lg font-bold text-gray-900" style={{ fontFamily: "var(--font-manrope)" }}>
        {title}
      </h3>
      <p className="max-w-[220px] text-sm text-gray-500">
        {description}
      </p>
    </div>
  );
}

export default function Process() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-28 lg:py-36 bg-gray-50">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            How We Work
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
            Our Distribution Flow
          </h2>
          <p className="mx-auto max-w-xl text-gray-500">
            From partnership to delivery, a seamless distribution experience
          </p>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <StepCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
