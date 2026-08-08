"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Package,
  Tag,
  Zap,
  CheckCircle,
  HeadphonesIcon,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Official Ooredoo Product",
    description: "100% genuine products from authorized channels.",
  },
  {
    icon: Package,
    title: "Reliable Availability",
    description: "Continuous stock supply nationwide across Algeria.",
  },
  {
    icon: Tag,
    title: "Wholesale Pricing",
    description: "Competitive pricing for retailer & business growth.",
  },
  {
    icon: Zap,
    title: "Fast Order Processing",
    description: "Efficient 24-48 hour order fulfillment.",
  },
  {
    icon: CheckCircle,
    title: "Business Ready",
    description: "Designed for retailers, wholesalers & partners.",
  },
  {
    icon: HeadphonesIcon,
    title: "Professional Support",
    description: "Dedicated account management and assistance.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function ProductBenefits() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-gray-50">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            Benefits
          </span>
          <h2
            className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-extrabold text-gray-900 lg:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why Choose This Product?
          </h2>
          <p className="mx-auto max-w-xl text-sm sm:text-base text-gray-500">
            Key advantages of sourcing official Ooredoo products from STI
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit) => (
            <motion.article
              key={benefit.title}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_12px_48px_rgba(200,16,46,0.08)] hover:-translate-y-1"
            >
              {/* Red accent line */}
              <div className="absolute left-0 top-0 h-[3px] w-0 bg-red-primary transition-all duration-500 group-hover:w-full" />

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-primary/10 text-red-primary transition-colors group-hover:bg-red-primary group-hover:text-white">
                <benefit.icon size={28} />
              </div>
              <h3
                className="mb-3 text-lg font-bold text-gray-900"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">{benefit.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}