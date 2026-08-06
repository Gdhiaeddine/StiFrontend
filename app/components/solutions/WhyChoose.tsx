"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, DollarSign, Headphones, BadgeCheck, Zap } from "lucide-react";

const features = [
  { icon: <ShieldCheck size={22} />, title: "Official Ooredoo Distributor", description: "Authorized and certified distribution partner for Ooredoo Algeria." },
  { icon: <Truck size={22} />, title: "Reliable Product Availability", description: "Consistent stock and timely delivery to keep your business running." },
  { icon: <DollarSign size={22} />, title: "Competitive Wholesale Pricing", description: "Attractive margins and volume-based pricing for partners." },
  { icon: <Headphones size={22} />, title: "Professional Customer Support", description: "Dedicated support team for orders, inquiries, and assistance." },
  { icon: <BadgeCheck size={22} />, title: "Authentic Products", description: "100% genuine Ooredoo products with full warranty." },
  { icon: <Zap size={22} />, title: "Fast Order Processing", description: "Quick confirmation and preparation of all partner orders." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function WhyChoose() {
  return (
    <section className="py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left — Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[24px] bg-white shadow-lg p-8">
              <svg viewBox="0 0 400 300" fill="none" className="w-full h-auto" aria-hidden="true">
                {/* Warehouse */}
                <rect x="50" y="100" width="300" height="150" rx="8" fill="#F8FAFC" stroke="#E5E7EB" strokeWidth="1" />
                <rect x="70" y="120" width="80" height="40" rx="4" fill="#D71920" opacity="0.08" />
                <rect x="160" y="120" width="80" height="40" rx="4" fill="#D71920" opacity="0.06" />
                <rect x="250" y="120" width="80" height="40" rx="4" fill="#D71920" opacity="0.08" />
                <rect x="70" y="170" width="80" height="40" rx="4" fill="#D71920" opacity="0.06" />
                <rect x="160" y="170" width="80" height="40" rx="4" fill="#D71920" opacity="0.08" />
                <rect x="250" y="170" width="80" height="40" rx="4" fill="#D71920" opacity="0.06" />
                <rect x="70" y="220" width="80" height="20" rx="4" fill="#D71920" opacity="0.04" />
                <rect x="160" y="220" width="80" height="20" rx="4" fill="#D71920" opacity="0.04" />
                <rect x="250" y="220" width="80" height="20" rx="4" fill="#D71920" opacity="0.04" />
                {/* SIM Cards floating */}
                <rect x="90" y="50" width="40" height="55" rx="6" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                <rect x="96" y="56" width="14" height="10" rx="2" fill="#D71920" opacity="0.3" />
                <rect x="270" y="40" width="40" height="55" rx="6" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                <rect x="276" y="46" width="14" height="10" rx="2" fill="#D71920" opacity="0.3" />
                {/* Recharge cards */}
                <rect x="180" y="60" width="50" height="30" rx="4" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                <rect x="186" y="66" width="20" height="6" rx="2" fill="#D71920" opacity="0.2" />
              </svg>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
                Why Choose STI
              </span>
              <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
                Trusted by Retailers Across Algeria
              </h2>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-8 space-y-5"
            >
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={item}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-primary text-white">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900" style={{ fontFamily: "var(--font-manrope)" }}>
                      {f.title}
                    </h3>
                    <p className="text-sm text-gray-500">{f.description}</p>
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
