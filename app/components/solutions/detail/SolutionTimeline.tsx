"use client";

import { motion } from "framer-motion";
import { ClipboardList, FileCheck, Boxes, Package, Handshake } from "lucide-react";

const steps = [
  { num: "01", icon: <ClipboardList size={22} />, title: "Order Request", description: "Partner submits an order through our streamlined process." },
  { num: "02", icon: <FileCheck size={22} />, title: "Confirmation", description: "Our team confirms and validates the order details." },
  { num: "03", icon: <Boxes size={22} />, title: "Preparation", description: "Products are carefully prepared and quality verified." },
  { num: "04", icon: <Package size={22} />, title: "Collection", description: "Partner collects the order at their convenience." },
  { num: "05", icon: <Handshake size={22} />, title: "Partner Support", description: "Continuous assistance and support after purchase." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function SolutionTimeline() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 sm:mb-16 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            Process
          </span>
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>How It Works</h2>
          <p className="mx-auto max-w-xl text-sm sm:text-base text-gray-500">Simple steps from order to delivery</p>
        </motion.div>

        <div className="hidden lg:block">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-0 right-0 top-[38px] h-[2px] bg-gradient-to-r from-red-primary/10 via-red-primary/25 to-red-primary/10" />
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="flex justify-between">
              {steps.map((step) => (
                <motion.div key={step.title} variants={item} whileHover={{ scale: 1.05 }} className="relative flex flex-col items-center text-center px-3 max-w-[180px]">
                  <div className="relative z-10 mb-6 flex h-[76px] w-[76px] items-center justify-center rounded-full border border-gray-200 bg-white text-red-primary shadow-lg transition-all duration-300">
                    {step.icon}
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-primary text-[10px] font-bold text-white">{step.num}</span>
                  </div>
                  <h3 className="mb-2 text-base font-bold text-gray-900" style={{ fontFamily: "var(--font-manrope)" }}>{step.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-500">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="lg:hidden max-w-md mx-auto">
          <div className="relative ml-4 sm:ml-6 border-l-2 border-red-primary/20 pl-6 sm:pl-8">
            {steps.map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative mb-8 sm:mb-10 last:mb-0">
                <div className="absolute -left-[38px] sm:-left-[42px] flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-red-primary shadow-sm">{step.icon}</div>
                <h3 className="mb-1 text-base font-bold text-gray-900" style={{ fontFamily: "var(--font-manrope)" }}>{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
