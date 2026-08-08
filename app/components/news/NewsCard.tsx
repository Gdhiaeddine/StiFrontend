"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  image?: string;
}

export default function NewsCard({ article }: { article: Article }) {
  return (
    <motion.article
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.06)] hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={article.image || "/assets/hero.png"}
          alt={article.title}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-red-primary backdrop-blur-sm">
          {article.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3 text-xs text-gray-400">{article.date}</div>
        <h3
          className="mb-3 text-lg font-bold text-gray-900 line-clamp-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {article.title}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-gray-500 line-clamp-2">
          {article.description}
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-primary transition-colors hover:text-red-accent"
        >
          Read More
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.article>
  );
}