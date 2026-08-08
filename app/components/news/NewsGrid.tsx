"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NewsCard from "./NewsCard";
import { useTranslations } from "../../[locale]/use-translations";

const categories = [
  "All",
  "Company News",
  "Products",
  "Partners",
  "Promotions",
  "Industry",
];

const articles = [
  {
    id: 1,
    title: "STI Opens New Regional Distribution Center",
    description: "Expanding our footprint to better serve retailers and partners across Algeria with faster delivery and improved product availability.",
    category: "Company News",
    date: "May 18, 2026",
  },
  {
    id: 2,
    title: "New Ooredoo Recharge Options Available",
    description: "Discover the latest Ooredoo mobile recharge denominations now available for wholesale purchase through STI.",
    category: "Products",
    date: "May 15, 2026",
  },
  {
    id: 3,
    title: "Growing Our Retail Partner Network",
    description: "STI welcomes new retail partners as we expand our distribution network across all 58 provinces of Algeria.",
    category: "Partners",
    date: "May 12, 2026",
  },
  {
    id: 4,
    title: "Special Wholesale Offers for Retailers",
    description: "Take advantage of our exclusive wholesale pricing for retailers and business partners this month.",
    category: "Promotions",
    date: "May 10, 2026",
  },
  {
    id: 5,
    title: "Improving Product Availability Across Algeria",
    description: "Our latest initiatives to ensure continuous stock supply and reliable product availability nationwide.",
    category: "Distribution",
    date: "May 8, 2026",
  },
  {
    id: 6,
    title: "The Future of Mobile Recharge Distribution",
    description: "Industry insights on how digital transformation is reshaping telecom distribution in Algeria.",
    category: "Industry",
    date: "May 5, 2026",
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function NewsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const t = useTranslations();
  const gridT = t.newsPage?.grid || {
    badge: "Recent News",
    title: "Latest News & Announcements",
    subtitle: "Explore company news, telecom insights, and distribution updates across Algeria.",
  };

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <section id="articles" className="py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            {gridT.badge}
          </span>
          <h2
            className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {gridT.title}
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            {gridT.subtitle}
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? "bg-red-primary text-white shadow-lg shadow-red-primary/25"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          key={activeCategory}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredArticles.map((article) => (
            <motion.div key={article.id} variants={itemVariants}>
              <NewsCard article={article} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}