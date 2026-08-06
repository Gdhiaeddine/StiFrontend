"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "../hooks";

const faqs = [
  {
    q: "How can I become an STI reseller?",
    a: "To become an STI reseller, contact our business development team through our contact form or call us directly. We offer competitive partnership programs with training, marketing support, and attractive margins for authorized resellers across Algeria.",
  },
  {
    q: "How do I activate a SIM card?",
    a: "SIM card activation can be done at any STI authorized point of sale or through our online portal. You'll need a valid ID and the SIM card package. Activation typically takes less than 5 minutes and the SIM is ready to use immediately.",
  },
  {
    q: "What business solutions do you provide?",
    a: "We offer enterprise connectivity, fleet SIM management, bulk mobile recharge, dedicated internet lines, MPLS networking, IoT solutions, cloud services, and digital transformation consulting. Each solution is tailored to your business needs.",
  },
  {
    q: "How can I contact technical support?",
    a: "You can reach our technical support team 24/7 by calling our support hotline, sending an email, or using the live chat on our website. Enterprise clients also have access to a dedicated account manager for priority support.",
  },
  {
    q: "Do you offer enterprise contracts?",
    a: "Yes, we offer flexible enterprise contracts with custom SLAs, volume pricing, dedicated account management, priority support, and monthly reporting. Contact our enterprise team to discuss your specific requirements.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`border-b border-gray-100 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="pr-4 text-base font-semibold text-gray-900" style={{ fontFamily: "var(--font-manrope)" }}>
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-gray-500">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="support" className="py-28 lg:py-36 bg-gray-50">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            FAQ
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Find answers to common questions about our services
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
