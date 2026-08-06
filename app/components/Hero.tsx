"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #C8102E 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }} />

      {/* Soft gradient circles */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-red-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-accent/3 rounded-full blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1320px] px-6 lg:px-8 pt-32 pb-20 lg:pt-0 lg:pb-0">
        <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-176px)]">
          {/* Left Content */}
          <header className="max-w-[600px] relative z-10">
            {/* Badge */}
            <div
              className="animate-fade-in-up inline-flex items-center mb-4"
              style={{ animationDelay: "0.1s", animationFillMode: "both" }}
            >
              <span className="text-[13px] font-extrabold text-red-primary tracking-widest uppercase">
                Official Ooredoo Distributor
              </span>
            </div>

            {/* Heading */}
            <h1
              className="animate-fade-in-up text-[clamp(2.75rem,5.5vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-gray-900 mb-6"
              style={{
                fontFamily: "var(--font-manrope)",
                animationDelay: "0.2s",
                animationFillMode: "both",
              }}
            >
              Innovative
              <br />
              <span className="text-red-primary">Telecommunication</span>
              <br />
              Solutions
              <br />
              for Algeria
            </h1>

            {/* Description */}
            <p
              className="animate-fade-in-up text-lg leading-relaxed text-gray-500 max-w-[540px] mb-10"
              style={{ animationDelay: "0.35s", animationFillMode: "both" }}
            >
              SARL Smart Technologie Innovation is an official Ooredoo distributor
              providing mobile recharge distribution, SIM activation, enterprise
              connectivity, internet solutions, routers, digital transformation,
              and professional customer support for businesses and individuals
              across Algeria.
            </p>

            {/* CTA Buttons */}
            <div
              className="animate-fade-in-up flex flex-wrap items-center gap-4 mb-12"
              style={{ animationDelay: "0.45s", animationFillMode: "both" }}
            >
              <a
                href="#solutions"
                className="group inline-flex items-center gap-2.5 rounded-full bg-red-primary px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-250 hover:shadow-xl hover:shadow-red-primary/25 hover:scale-[1.03]"
              >
                Discover Solutions
                <ArrowRight
                  size={16}
                  className="transition-transform duration-250 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-[15px] font-semibold text-gray-700 transition-all duration-250 hover:border-gray-300 hover:shadow-lg hover:scale-[1.03]"
              >
                Contact Sales
              </a>
            </div>

          </header>

          {/* Right Side - Background Image */}
          <div className="absolute right-0 top-0 bottom-0 w-[65%] hidden lg:block">
            <Image
              src="/assets/hero.png"
              alt="STI Telecom Solutions"
              width={1500}
              height={1500}
              className="w-full h-full object-contain object-right"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
