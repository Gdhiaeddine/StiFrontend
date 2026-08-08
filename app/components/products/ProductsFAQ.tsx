"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "../../hooks";
import { useTranslations } from "../../[locale]/use-translations";

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
        className="flex w-full items-center justify-between py-5 text-left rtl:text-right"
        aria-expanded={open}
      >
        <span className="pr-4 rtl:pr-0 rtl:pl-4 text-base font-semibold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
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

export default function ProductsFAQ() {
  const { ref, visible } = useScrollReveal();
  const t = useTranslations();
  const defaultFaqItems = [
    { question: "Which recharge denominations are available?", answer: "We offer a complete range of Ooredoo recharge denominations including 200 DA, 500 DA, 1,000 DA, 2,000 DA, 5,000 DA, and 10,000 DA. All denominations are available for wholesale purchase." },
    { question: "Are all products official Ooredoo products?", answer: "Yes, all products we distribute are 100% genuine official Ooredoo products. As an authorized Ooredoo distributor, we guarantee the authenticity of every product." },
    { question: "Can I buy products in bulk?", answer: "Absolutely! We specialize in wholesale distribution. Bulk purchasing options are available for all our products with competitive pricing for retailers, wholesalers, and business partners." },
    { question: "How do I become a reseller?", answer: "To become an authorized reseller, please contact our sales team or fill out the quote request form. Our team will review your application and provide partnership details." },
    { question: "How quickly are orders processed?", answer: "Orders are typically processed within 24-48 business hours after confirmation. Delivery times may vary depending on your location within Algeria." },
  ];

  const faqT = t.productsPage?.faq || {
    badge: "Support",
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about purchasing Ooredoo products from STI.",
  };

  const faqItems = defaultFaqItems;

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
            {faqT.badge}
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            {faqT.title}
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            {faqT.subtitle}
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          {faqItems.map((f, i) => (
            <FaqItem key={f.question} q={f.question} a={f.answer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}