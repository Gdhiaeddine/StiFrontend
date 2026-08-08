"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTranslations } from "../../[locale]/use-translations";
import { useScrollReveal } from "../../hooks";

const icons = [
  <Phone size={24} />,
  <Mail size={24} />,
  <MapPin size={24} />,
  <Clock size={24} />,
];

function Card({ title, value, description, icon, index }: { title: string; value: string; description: string; icon: React.ReactNode; index: number }) {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_12px_48px_rgba(200,16,46,0.08)] hover:-translate-y-1 flex flex-col"
    >
      {/* Red top accent line on hover */}
      <div className="absolute left-0 top-0 h-[3px] w-0 bg-red-primary transition-all duration-500 group-hover:w-full" />

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-primary/10 text-red-primary transition-colors group-hover:bg-red-primary group-hover:text-white">
        {icon}
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-red-primary mb-2">
        {title}
      </span>
      <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
        {value}
      </h3>
      <p className="text-xs text-gray-500 leading-relaxed mt-auto">{description}</p>
    </motion.article>
  );
}

export default function ContactCards() {
  const t = useTranslations();

  const items = [
    { title: t.contact.cards.phone_title, value: t.contact.cards.phone_value, description: t.contact.cards.phone_desc },
    { title: t.contact.cards.email_title, value: t.contact.cards.email_value, description: t.contact.cards.email_desc },
    { title: t.contact.cards.address_title, value: t.contact.cards.address_value, description: t.contact.cards.address_desc },
    { title: t.contact.cards.hours_title, value: t.contact.cards.hours_value, description: t.contact.cards.hours_desc },
  ];

  return (
    <section className="py-28 lg:py-36 bg-gray-50">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            Quick Connect
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 lg:text-4xl mb-4" style={{ fontFamily: "var(--font-display)" }}>
            {t.contact.cards.section_title}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t.contact.cards.section_subtitle}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Card key={item.title} {...item} icon={icons[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}