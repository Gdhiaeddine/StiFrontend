"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Handshake, MapPin, ThumbsUp } from "lucide-react";

const stats = [
  { icon: <Briefcase size={24} />, title: "Decade of Excellence", label: "Proven expertise in telecom distribution built over many years" },
  { icon: <Users size={24} />, title: "Massive Customer Base", label: "Trusted by tens of thousands of customers nationwide" },
  { icon: <Handshake size={24} />, title: "Strong Partnerships", label: "Deep and lasting relationships with business partners across Algeria" },
  { icon: <MapPin size={24} />, title: "All 58 Provinces", label: "Full nationwide coverage across every Algerian province" },
  { icon: <ThumbsUp size={24} />, title: "Top Satisfaction", label: "Industry-leading customer satisfaction and retention" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Statistics() {
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
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
            Our Numbers Speak
          </h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Trusted by thousands of businesses and individuals across Algeria
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5"
        >
          {stats.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              className="group flex flex-col items-center rounded-3xl bg-white p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(200,16,46,0.08)] hover:-translate-y-1"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-primary/8 text-red-primary transition-colors group-hover:bg-red-primary group-hover:text-white">
                {s.icon}
              </div>
              <div className="mb-2 text-lg font-extrabold text-gray-900 text-center" style={{ fontFamily: "var(--font-manrope)" }}>
                {s.title}
              </div>
              <div className="text-sm text-gray-500 text-center leading-relaxed">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
