"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Globe, Building2 } from "lucide-react";

const certs = [
  { icon: <ShieldCheck size={24} />, title: "Official Ooredoo Distributor", description: "Fully authorized and certified by Ooredoo Algeria for nationwide distribution." },
  { icon: <Award size={24} />, title: "ISO 9001 Certified", description: "Quality management systems certified to international standards." },
  { icon: <Globe size={24} />, title: "Nationwide Coverage", description: "Operations spanning all 58 provinces with dedicated regional teams." },
  { icon: <Building2 size={24} />, title: "Enterprise Grade", description: "Serving Fortune 500-level clients with enterprise-grade SLAs." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Partnership() {
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
            Partnerships & Certifications
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
            Trusted & Certified
          </h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Our credentials speak to our commitment to excellence
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {certs.map((cert) => (
            <motion.div
              key={cert.title}
              variants={item}
              className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_12px_48px_rgba(200,16,46,0.08)] hover:-translate-y-1"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-primary/8 text-red-primary transition-colors group-hover:bg-red-primary group-hover:text-white">
                {cert.icon}
              </div>
              <h3 className="mb-2 text-base font-bold text-gray-900" style={{ fontFamily: "var(--font-manrope)" }}>
                {cert.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
