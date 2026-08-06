"use client";

import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "../hooks";
import { useTranslations } from "../[locale]/use-translations";

const colors = ["from-red-primary to-red-accent", "from-gray-700 to-gray-900", "from-gray-600 to-gray-800"];

function TestimonialCard({ name, role, review, color, index }: { name: string; role: string; review: string; color: string; index: number }) {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <article
      ref={ref}
      className={`relative overflow-hidden rounded-2xl border border-gray-100 bg-white/80 p-8 shadow-[0_2px_16px_rgba(0,0,0,0.03)] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.06)] hover:-translate-y-1 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Quote size={32} className="mb-4 text-red-primary/20" />

      <div className="mb-4 flex gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
        ))}
      </div>

      <p className="mb-6 text-sm leading-relaxed text-gray-600">
        &ldquo;{review}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${color} text-sm font-bold text-white`}>
          {name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">{name}</div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const { ref, visible } = useScrollReveal();
  const t = useTranslations();

  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            {t.testimonials.badge}
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
            {t.testimonials.title}
          </h2>
          <p className="mx-auto max-w-xl text-gray-500">
            {t.testimonials.subtitle}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <TestimonialCard key={item.name} {...item} color={colors[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
