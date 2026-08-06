"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who is STI?",
    a: "SARL Smart Technologie Innovation (STI) is the official Ooredoo distributor in Algeria, providing comprehensive telecommunications solutions including mobile recharge distribution, SIM activation, enterprise connectivity, and digital transformation services since 2023.",
  },
  {
    q: "What services do you provide?",
    a: "We offer mobile recharge distribution, SIM card activation and management, enterprise connectivity solutions, internet and fiber optic services, technical support, IoT solutions, cloud services, and digital transformation consulting for businesses of all sizes.",
  },
  {
    q: "How can I become a partner?",
    a: "To become an STI reseller or partner, contact our business development team through our website or call us directly. We offer competitive partnership programs with training, marketing support, and attractive margins for authorized resellers across all 58 provinces.",
  },
  {
    q: "Do you offer enterprise services?",
    a: "Yes, we provide comprehensive enterprise solutions including fleet SIM management, corporate internet, bulk mobile recharge, dedicated account managers, secure connectivity, and monthly reporting. Our enterprise clients benefit from custom SLAs and priority support.",
  },
  {
    q: "How can I contact technical support?",
    a: "You can reach our technical support team 24/7 by calling our support hotline, sending an email, or using the live chat on our website. Enterprise clients also have access to a dedicated account manager for priority support and faster resolution times.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border-b border-gray-100"
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
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-gray-500">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            FAQ
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Find answers to common questions about STI and our services
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
