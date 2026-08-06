"use client";

import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks";

export default function FinalCTA() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contact" className="py-28 lg:py-36 bg-red-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-accent/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-8 text-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="mb-6 text-3xl font-extrabold text-white lg:text-5xl" style={{ fontFamily: "var(--font-manrope)" }}>
            Ready to Grow with
            <br />
            Algeria&apos;s Trusted Telecom Partner?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
            Whether you&apos;re a business looking for enterprise connectivity or an individual
            seeking reliable telecom services, STI is here to help you succeed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-red-primary transition-all duration-250 hover:shadow-xl hover:scale-[1.03]"
            >
              Contact Us
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-250 hover:bg-white/20 hover:scale-[1.03]"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
