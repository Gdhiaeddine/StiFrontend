"use client";

import { motion } from "framer-motion";

export default function SolutionsOverview() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[700px] text-center"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            Our Solutions
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
            Reliable Distribution Solutions
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Professional distribution solutions designed for retailers, wholesalers
            and business partners across Algeria.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
