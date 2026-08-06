"use client";

import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks";
import { useTranslations } from "../[locale]/use-translations";

function ProductCard({ image, title, description, index, ctaText }: { image: string; title: string; description: string; index: number; ctaText: string }) {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <article
      ref={ref}
      className={`group flex flex-col h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative overflow-hidden bg-gray-50 p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-red-primary/3 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <img
          src={image}
          alt={title}
          className="mx-auto h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="mb-2 text-lg font-bold text-gray-900" style={{ fontFamily: "var(--font-manrope)" }}>
          {title}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-gray-500">
          {description}
        </p>
        <a
          href="#contact"
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-red-primary transition-colors hover:text-red-accent"
        >
          {ctaText}
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}

export default function Products() {
  const { ref, visible } = useScrollReveal();
  const t = useTranslations();

  return (
    <section id="products" className="py-28 lg:py-36 bg-gray-50">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            {t.products.badge}
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
            {t.products.title}
          </h2>
          <p className="mx-auto max-w-xl text-gray-500">
            {t.products.subtitle}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {t.products.items.map((p, i) => (
            <ProductCard key={p.title} image="/assets/hero.png" title={p.title} description={p.description} index={i} ctaText={t.products.cta} />
          ))}
        </div>
      </div>
    </section>
  );
}
