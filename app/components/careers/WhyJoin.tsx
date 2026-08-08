"use client";

import { motion } from "framer-motion";
import { TrendingUp, GraduationCap, Users, Award, Laptop, Trophy } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear opportunities for professional advancement and continuous career progression.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Comprehensive training and skill development programs tailored for your role.",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    description: "A supportive, experienced team dedicated to shared goals and teamwork.",
  },
  {
    icon: Award,
    title: "Official Ooredoo Partner",
    description: "Work with Algeria's official, authorized Ooredoo telecom distributor.",
  },
  {
    icon: Laptop,
    title: "Modern Workplace",
    description: "A technology-driven, dynamic work environment designed for performance.",
  },
  {
    icon: Trophy,
    title: "Performance Recognition",
    description: "Grow based on merit with performance rewards and recognition.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function WhyJoin() {
  return (
    <section className="py-28 lg:py-36 bg-gray-50">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            Benefits & Culture
          </span>
          <h2
            className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why Join STI?
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            Build your future with a company committed to innovation, teamwork, and professional growth.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_12px_48px_rgba(200,16,46,0.08)]"
            >
              {/* Red top accent line on hover */}
              <div className="absolute left-0 top-0 h-[3px] w-0 bg-red-primary transition-all duration-500 group-hover:w-full" />

              {/* Icon */}
              <div className="w-14 h-14 bg-red-primary/10 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-red-primary group-hover:shadow-lg group-hover:shadow-red-primary/25">
                <reason.icon
                  size={24}
                  className="text-red-primary transition-colors duration-300 group-hover:text-white"
                />
              </div>

              {/* Content */}
              <h3
                className="text-lg font-bold text-gray-900 mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}