"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Smartphone, CardSim, Building2, Zap } from "lucide-react";

const solutions = [
  {
    slug: "mobile-recharge-credit",
    icon: <Smartphone size={24} />,
    title: "Mobile Recharge Credit",
    description: "Ooredoo mobile recharge credit in multiple denominations.",
  },
  {
    slug: "prepaid-sim-cards",
    icon: <CardSim size={24} />,
    title: "SIM Card Distribution",
    description: "Prepaid SIM cards for retailers and sales partners.",
  },
  {
    slug: "wholesale-recharge",
    icon: <Building2 size={24} />,
    title: "Wholesale Solutions",
    description: "Bulk purchasing options for resellers and wholesalers.",
  },
  {
    slug: "partner-services",
    icon: <Zap size={24} />,
    title: "Partner Services",
    description: "Dedicated support for orders and product availability.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function SolutionsGrid() {
  return (
    <section id="solutions-grid" className="py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[700px] text-center mb-16"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            Our Solutions
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
            Reliable Distribution Solutions
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Professional distribution solutions designed for retailers, wholesalers, and business partners across Algeria.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {solutions.map((s) => (
            <motion.article
              key={s.title}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_12px_48px_rgba(200,16,46,0.08)] hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Red accent line */}
              <div className="absolute left-0 top-0 h-[3px] w-0 bg-red-primary transition-all duration-500 group-hover:w-full" />

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-primary/8 text-red-primary transition-colors group-hover:bg-red-primary group-hover:text-white">
                {s.icon}
              </div>

              <h3 className="mb-3 text-lg font-bold text-gray-900" style={{ fontFamily: "var(--font-manrope)" }}>
                {s.title}
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-gray-500">
                {s.description}
              </p>

              <Link
                href={`/solutions/${s.slug}`}
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-red-primary transition-colors hover:text-red-accent"
              >
                Learn More
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
