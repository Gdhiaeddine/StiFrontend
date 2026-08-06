"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck, Users, Globe, Award } from "lucide-react";
import { useScrollReveal } from "../hooks";

const features = [
  { icon: <ShieldCheck size={20} />, text: "Official certification" },
  { icon: <Users size={20} />, text: "Trusted partnership" },
  { icon: <Globe size={20} />, text: "Nationwide service" },
  { icon: <Award size={20} />, text: "Enterprise expertise" },
];

export default function Partnership() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-[22px] border border-gray-100 bg-white shadow-[0_4px_40px_rgba(0,0,0,0.06)] transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Subtle red gradient border top */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-red-primary to-transparent" />

          <div className="flex flex-row max-[1323px]:flex-col items-stretch gap-0">
            {/* Left — Logo */}
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white p-12 max-[1323px]:p-10 min-w-[280px] max-[1323px]:min-w-0">
              <span className="mb-4 text-xs font-bold uppercase tracking-widest text-red-primary">
                Official Partnership
              </span>
              <div className="relative">
                <div className="absolute -inset-8 rounded-full bg-red-primary/5 blur-2xl" />
                <Image
                  src="/assets/ooredoo-logo.svg"
                  alt="Ooredoo Logo"
                  width={160}
                  height={60}
                  className="relative h-14 w-auto"
                />
              </div>
            </div>

            {/* Middle — Heading & Description */}
            <div className="flex flex-col justify-center border-l max-[1323px]:border-l-0 max-[1323px]:border-t border-gray-100 p-10 max-[1323px]:p-8 max-w-[480px] max-[1323px]:max-w-none">
              <h2 className="mb-4 text-3xl font-extrabold text-gray-900 max-[1323px]:text-2xl" style={{ fontFamily: "var(--font-manrope)" }}>
                Official Ooredoo Distributor
              </h2>
              <p className="text-base leading-relaxed text-gray-500">
                SARL Smart Technologie Innovation is an authorized Ooredoo distributor
                providing professional telecom services, mobile recharge distribution,
                SIM management, enterprise connectivity, and customer support across Algeria.
              </p>
            </div>

            {/* Right — Features & CTA */}
            <div className="flex flex-col justify-center border-l max-[1323px]:border-l-0 max-[1323px]:border-t border-gray-100 p-10 max-[1323px]:p-8 flex-1">
              <div className="mb-8 grid grid-cols-2 max-[1323px]:grid-cols-1 gap-4">
                {features.map((f) => (
                  <div key={f.text} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-primary/8 text-red-primary">
                      {f.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{f.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="#solutions"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-red-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-250 hover:shadow-lg hover:shadow-red-primary/25 hover:scale-[1.03]"
              >
                Learn More
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
