"use client";

import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks";

const articles = [
  {
    image: "/assets/hero.png",
    category: "Company News",
    title: "STI Expands Enterprise Solutions Across 12 New Provinces",
    excerpt: "Smart Technologie Innovation continues its nationwide expansion with new enterprise connectivity services in underserved regions.",
    date: "Jan 15, 2026",
  },
  {
    image: "/assets/hero.png",
    category: "Technology",
    title: "Introducing 5G-Ready Business Routers for Algerian Enterprises",
    excerpt: "STI launches a new range of 5G-compatible routers designed to meet the growing demand for high-speed business connectivity.",
    date: "Feb 3, 2026",
  },
  {
    image: "/assets/hero.png",
    category: "Partnership",
    title: "STI and Ooredoo Strengthen Distribution Partnership for 2026",
    excerpt: "The expanded partnership will bring enhanced mobile services and digital solutions to more customers across Algeria.",
    date: "Mar 10, 2026",
  },
];

function ArticleCard({ image, category, title, excerpt, date, index }: { image: string; category: string; title: string; excerpt: string; date: string; index: number }) {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <article
      ref={ref}
      className={`group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.06)] hover:-translate-y-1 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-red-primary backdrop-blur-sm">
          {category}
        </span>
      </div>
      <div className="p-6">
        <div className="mb-3 text-xs text-gray-400">{date}</div>
        <h3 className="mb-3 text-lg font-bold text-gray-900 line-clamp-2" style={{ fontFamily: "var(--font-manrope)" }}>
          {title}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-gray-500 line-clamp-2">
          {excerpt}
        </p>
        <a
          href="#news"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-primary transition-colors hover:text-red-accent"
        >
          Read More
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}

export default function LatestNews() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="news" className="py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            Latest News
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
            Stay Updated
          </h2>
          <p className="mx-auto max-w-xl text-gray-500">
            The latest from STI and the Algerian telecom industry
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((a, i) => (
            <ArticleCard key={a.title} {...a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
