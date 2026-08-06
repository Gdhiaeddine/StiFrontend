"use client";

import { ArrowRight, Smartphone, CardSim, Truck, Coins, Handshake, Building2 } from "lucide-react";
import { useScrollReveal } from "../hooks";
import { useTranslations } from "../[locale]/use-translations";

const icons = [<Smartphone size={24} />, <CardSim size={24} />, <Truck size={24} />, <Coins size={24} />, <Handshake size={24} />, <Building2 size={24} />];

function ServiceCard({ icon, title, description, index, ctaText }: { icon: React.ReactNode; title: string; description: string; index: number; ctaText: string }) {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_12px_48px_rgba(200,16,46,0.08)] hover:-translate-y-1 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Red accent line */}
      <div className="absolute left-0 top-0 h-[3px] w-0 bg-red-primary transition-all duration-500 group-hover:w-full" />

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-primary/8 text-red-primary transition-colors group-hover:bg-red-primary group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-3 text-lg font-bold text-gray-900" style={{ fontFamily: "var(--font-manrope)" }}>
        {title}
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-gray-500">
        {description}
      </p>
      <a
        href="#contact"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-primary transition-colors hover:text-red-accent"
      >
        {ctaText}
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}

export default function Services() {
  const { ref, visible } = useScrollReveal();
  const t = useTranslations();

  return (
    <section id="solutions" className="py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            {t.services.badge}
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
            {t.services.title}
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            {t.services.subtitle}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <ServiceCard key={s.title} icon={icons[i]} title={s.title} description={s.description} index={i} ctaText={t.services.cta} />
          ))}
        </div>
      </div>
    </section>
  );
}
