"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Tag,
  Package,
  Zap,
  Truck,
  HeadphonesIcon,
} from "lucide-react";
import { useTranslations } from "../../[locale]/use-translations";

const benefitIcons = [ShieldCheck, Tag, Package, Zap, Truck, HeadphonesIcon];

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

export default function BenefitsSection() {
  const t = useTranslations();
  const defaultBenefits = [
    { title: "Official Ooredoo Products", description: "100% genuine products directly from Ooredoo Algeria." },
    { title: "Competitive Wholesale Pricing", description: "Designed to maximize margins for business growth." },
    { title: "Reliable Stock Availability", description: "Continuous inventory supply without interruptions." },
    { title: "Fast Order Processing", description: "Efficient fulfillment and rapid dispatch." },
    { title: "Nationwide Distribution Support", description: "Serving partners across all 58 Algerian provinces." },
    { title: "Dedicated Business Support", description: "Professional account management and assistance." },
  ];

  const benT = t.productsPage?.benefits || {
    badge: "Why Choose STI",
    title: "Product Distribution Advantages",
    subtitle: "Unmatched reliability, stock availability, and wholesale pricing for Algerian businesses.",
  };

  const benefitsList = defaultBenefits;

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
            {benT.badge}
          </span>
          <h2
            className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {benT.title}
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            {benT.subtitle}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefitsList.map((benefit, idx) => {
            const IconComponent = benefitIcons[idx % benefitIcons.length];
            return (
              <motion.div
                key={benefit.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_8px_40px_rgba(200,16,46,0.08)] hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-red-primary/10 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-red-primary group-hover:shadow-lg group-hover:shadow-red-primary/25">
                  <IconComponent
                    size={24}
                    className="text-red-primary transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* Content */}
                <h3
                  className="text-lg font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}