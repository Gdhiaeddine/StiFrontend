"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const cards = [
  {
    icon: <Target size={28} />,
    title: "Our Mission",
    description: "To ensure the reliable distribution of official Ooredoo mobile recharge credit and prepaid SIM cards, providing retailers, wholesalers, and business partners across Algeria with fast, secure, and dependable supply.",
    color: "from-red-primary to-red-accent",
  },
  {
    icon: <Eye size={28} />,
    title: "Our Vision",
    description: "To become Algeria's most trusted and preferred Ooredoo distribution partner, recognized for operational excellence, reliable service, and a strong nationwide distribution network.",
    color: "from-gray-700 to-gray-900",
  },
  {
    icon: <Heart size={28} />,
    title: "Our Values",
    description: "Reliability, integrity, customer commitment, and operational excellence form the foundation of everything we do, ensuring strong partnerships and dependable telecom distribution across Algeria.",
    color: "from-gray-600 to-gray-800",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function MissionVision() {
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
            Purpose & Values
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
            Mission, Vision & Values
          </h2>
          <p className="mx-auto max-w-xl text-gray-500">
            The principles that drive our commitment to reliable telecom distribution across Algeria.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={item}
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 lg:p-10 shadow-[0_2px_16px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_16px_56px_rgba(200,16,46,0.08)] hover:-translate-y-1"
            >
              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${card.color} text-white transition-transform duration-500 group-hover:scale-110`}>
                {card.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-manrope)" }}>
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
