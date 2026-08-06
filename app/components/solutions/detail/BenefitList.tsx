"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Props {
  benefits: { title: string; description: string }[];
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function BenefitList({ benefits }: Props) {
  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg p-8">
              <svg viewBox="0 0 400 300" fill="none" className="w-full h-auto" aria-hidden="true">
                <rect x="50" y="80" width="300" height="180" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                <rect x="70" y="100" width="100" height="60" rx="6" fill="#C8102E" opacity="0.08" />
                <rect x="180" y="100" width="100" height="60" rx="6" fill="#C8102E" opacity="0.06" />
                <rect x="70" y="170" width="100" height="60" rx="6" fill="#C8102E" opacity="0.06" />
                <rect x="180" y="170" width="100" height="60" rx="6" fill="#C8102E" opacity="0.08" />
                <rect x="290" y="100" width="40" height="130" rx="6" fill="#C8102E" opacity="0.04" />
                <text x="200" y="280" textAnchor="middle" fill="#C8102E" fontSize="10" fontWeight="bold">BUSINESS GROWTH</text>
                <circle cx="100" cy="50" r="2" fill="#C8102E" opacity="0.2">
                  <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="350" cy="60" r="1.5" fill="#C8102E" opacity="0.15">
                  <animate attributeName="opacity" values="0.05;0.25;0.05" dur="4s" begin="1s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </motion.div>

          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">Why Choose STI</span>
              <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>Benefits for Your Business</h2>
            </motion.div>
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="mt-8 space-y-5">
              {benefits.map((b) => (
                <motion.div key={b.title} variants={item} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-primary text-white">
                    <Check size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900" style={{ fontFamily: "var(--font-manrope)" }}>{b.title}</h3>
                    <p className="text-sm text-gray-500">{b.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
