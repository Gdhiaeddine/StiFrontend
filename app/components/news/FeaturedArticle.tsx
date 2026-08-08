"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, BadgeCheck } from "lucide-react";
import { useTranslations } from "../../[locale]/use-translations";

export default function FeaturedArticle() {
  const t = useTranslations();
  const featT = t.newsPage?.featured || {
    badge: "Featured Article",
    title: "STI Expands Distribution Services Across Algeria",
    description: "SARL Smart Technologie Innovation continues strengthening its distribution capabilities, ensuring retailers and business partners receive reliable access to official Ooredoo mobile recharge credit and prepaid SIM cards throughout Algeria.",
    date: "May 20, 2026",
    category: "Announcements",
    read_time: "5 min read",
    read_more: "Read Full Article",
  };

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
            {featT.badge}
          </span>
          <h2
            className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {featT.title}
          </h2>
        </motion.div>

        {/* Featured Card */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] overflow-hidden"
        >
          <div className="grid lg:grid-cols-[45%_55%]">
            {/* Image Container */}
            <div className="relative h-64 lg:h-auto bg-gradient-to-br from-gray-50 to-white flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-100">
              <div className="relative w-48 h-32 bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red-primary rounded-xl flex items-center justify-center">
                    <span className="text-white text-[8px] font-bold">STI</span>
                  </div>
                  <div>
                    <div className="h-2 bg-gray-200 rounded-full w-20 mb-1" />
                    <div className="h-1.5 bg-gray-100 rounded-full w-14" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-12 bg-gradient-to-r from-red-primary/10 to-red-primary/5 rounded-lg" />
                  <div className="h-2 bg-gray-100 rounded-full w-full" />
                  <div className="h-2 bg-gray-100 rounded-full w-3/4" />
                </div>
              </div>
              {/* Floating element */}
              <div className="absolute top-8 right-8 rtl:right-auto rtl:left-8">
                <div className="w-12 h-12 bg-red-primary/10 rounded-xl flex items-center justify-center shadow-md">
                  <BadgeCheck size={20} className="text-red-primary" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-primary/10 mb-6 w-fit">
                <BadgeCheck size={14} className="text-red-primary" />
                <span className="text-xs font-bold text-red-primary">{featT.category}</span>
              </div>

              {/* Headline */}
              <h3
                className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {featT.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed mb-8">
                {featT.description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{featT.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{featT.read_time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>STI Team</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#articles"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-red-primary transition-all duration-300 hover:gap-3"
              >
                {featT.read_more}
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </a>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}