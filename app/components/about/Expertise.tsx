"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const expertise = [
  "Mobile Distribution & Recharge",
  "SIM Card Management & Activation",
  "Enterprise Connectivity Solutions",
  "Internet & Fiber Optic Services",
  "IoT & Digital Transformation",
  "Technical Support & Maintenance",
];

export default function Expertise() {
  return (
    <section className="py-28 lg:py-36 bg-gray-50">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left — Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary"
            >
              Our Expertise
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-3xl font-extrabold text-gray-900 lg:text-4xl"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Deep Telecom Knowledge
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 text-gray-500 leading-relaxed"
            >
              With over a decade of experience in the Algerian telecommunications market,
              STI has developed deep expertise across the entire telecom value chain.
              Our team combines technical knowledge with business acumen to deliver
              solutions that drive real results.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              {expertise.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-primary/10 text-red-primary">
                    <Check size={14} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right — Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[440px] aspect-square mx-auto">
              <svg viewBox="0 0 400 400" fill="none" className="w-full h-full" aria-hidden="true">
                {/* Central hub */}
                <circle cx="200" cy="200" r="60" fill="#C8102E" opacity="0.06" stroke="#C8102E" strokeWidth="1" />
                <circle cx="200" cy="200" r="30" fill="#C8102E" opacity="0.1" />

                {/* Satellite nodes */}
                <circle cx="200" cy="80" r="20" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                <circle cx="200" cy="80" r="8" fill="#C8102E" opacity="0.2" />
                <line x1="200" y1="100" x2="200" y2="170" stroke="#C8102E" strokeWidth="1" opacity="0.2" />

                <circle cx="320" cy="140" r="20" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                <circle cx="320" cy="140" r="8" fill="#C8102E" opacity="0.2" />
                <line x1="304" y1="152" x2="230" y2="185" stroke="#C8102E" strokeWidth="1" opacity="0.2" />

                <circle cx="320" cy="260" r="20" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                <circle cx="320" cy="260" r="8" fill="#C8102E" opacity="0.2" />
                <line x1="304" y1="248" x2="230" y2="215" stroke="#C8102E" strokeWidth="1" opacity="0.2" />

                <circle cx="200" cy="320" r="20" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                <circle cx="200" cy="320" r="8" fill="#C8102E" opacity="0.2" />
                <line x1="200" y1="300" x2="200" y2="230" stroke="#C8102E" strokeWidth="1" opacity="0.2" />

                <circle cx="80" cy="260" r="20" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                <circle cx="80" cy="260" r="8" fill="#C8102E" opacity="0.2" />
                <line x1="96" y1="248" x2="170" y2="215" stroke="#C8102E" strokeWidth="1" opacity="0.2" />

                <circle cx="80" cy="140" r="20" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                <circle cx="80" cy="140" r="8" fill="#C8102E" opacity="0.2" />
                <line x1="96" y1="152" x2="170" y2="185" stroke="#C8102E" strokeWidth="1" opacity="0.2" />

                {/* Orbiting dot */}
                <circle r="4" fill="#C8102E" opacity="0.5">
                  <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="10s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
