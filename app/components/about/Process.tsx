"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  { num: "01", icon: <MessageSquare size={22} />, title: "Consultation", description: "We discuss your business needs and telecom requirements in detail." },
  { num: "02", icon: <Search size={22} />, title: "Planning", description: "Our experts analyze your infrastructure and design optimal solutions." },
  { num: "03", icon: <Rocket size={22} />, title: "Deployment", description: "Fast and professional implementation with minimal disruption." },
  { num: "04", icon: <LifeBuoy size={22} />, title: "Continuous Support", description: "Ongoing monitoring, maintenance, and 24/7 technical assistance." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Process() {
  return (
    <section className="py-28 lg:py-36 bg-gray-50">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            How We Work
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
            Our Process
          </h2>
          <p className="mx-auto max-w-xl text-gray-500">
            A streamlined approach from consultation to deployment and beyond
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={item}
              className="relative flex flex-col items-center text-center"
            >
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="absolute left-[calc(50%+44px)] top-10 hidden h-[2px] w-[calc(100%-88px)] bg-gradient-to-r from-red-primary/30 to-red-primary/10 lg:block" />
              )}

              <div className="relative mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-100 bg-white text-red-primary shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  {step.icon}
                </div>
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-primary text-[11px] font-bold text-white">
                  {step.num}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900" style={{ fontFamily: "var(--font-manrope)" }}>
                {step.title}
              </h3>
              <p className="max-w-[220px] text-sm text-gray-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
