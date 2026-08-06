"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Award, Lightbulb, Lock, Headphones } from "lucide-react";

const features = [
  { icon: <ShieldCheck size={24} />, title: "Official Ooredoo Partner", description: "Authorized distributor with direct partnership and full certification from Ooredoo Algeria." },
  { icon: <Zap size={24} />, title: "Fast Delivery", description: "Rapid deployment of SIM cards, devices, and connectivity solutions across all 58 provinces." },
  { icon: <Award size={24} />, title: "Certified Experts", description: "Highly trained telecom professionals with deep expertise in enterprise and consumer solutions." },
  { icon: <Lightbulb size={24} />, title: "Innovative Technologies", description: "Cutting-edge IoT, cloud, and digital transformation solutions for modern businesses." },
  { icon: <Lock size={24} />, title: "Secure Infrastructure", description: "Enterprise-grade security and reliable network infrastructure for uninterrupted service." },
  { icon: <Headphones size={24} />, title: "24/7 Professional Support", description: "Round-the-clock technical support and dedicated account management for all clients." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function WhyChoose() {
  return (
    <section className="py-28 lg:py-36 bg-gray-900">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-accent">
            Why STI
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-white lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
            Why Choose STI
          </h2>
          <p className="mx-auto max-w-xl text-gray-400">
            Six reasons why leading businesses trust us with their telecom needs
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(200,16,46,0.1)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-primary/20 text-red-primary transition-colors group-hover:bg-red-primary group-hover:text-white">
                {f.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
