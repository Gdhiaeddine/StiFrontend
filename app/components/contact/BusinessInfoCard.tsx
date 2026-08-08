"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTranslations } from "../../[locale]/use-translations";
import { useScrollReveal } from "../../hooks";

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3z"/>
  </svg>
);

const socials = [
  { icon: <LinkedinIcon />, href: "#", label: "LinkedIn" },
  { icon: <FacebookIcon />, href: "#", label: "Facebook" },
  { icon: <InstagramIcon />, href: "#", label: "Instagram" },
  { icon: <YoutubeIcon />, href: "#", label: "YouTube" },
];

export default function BusinessInfoCard() {
  const t = useTranslations();
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl border border-gray-100 bg-white p-8 lg:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
    >
      <h3 className="text-lg font-extrabold text-gray-900 mb-1" style={{ fontFamily: "var(--font-display)" }}>
        {t.contact.info.title}
      </h3>
      <p className="text-sm text-gray-500 mb-8">{t.contact.info.subtitle}</p>

      <ul className="space-y-5 mb-8">
        <li className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-primary/10 text-red-primary">
            <Phone size={18} />
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">+213 XXX XX XX XX</div>
            <div className="text-xs text-gray-500">{t.contact.info.phone_label}</div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-primary/10 text-red-primary">
            <Mail size={18} />
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">contact@sti.dz</div>
            <div className="text-xs text-gray-500">{t.contact.info.email_label}</div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-primary/10 text-red-primary">
            <MapPin size={18} />
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">{t.contact.info.address_value}</div>
            <div className="text-xs text-gray-500">{t.contact.info.address_label}</div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-primary/10 text-red-primary">
            <Clock size={18} />
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">{t.contact.info.hours_value}</div>
            <div className="text-xs text-gray-500">{t.contact.info.hours_label}</div>
          </div>
        </li>
      </ul>

      <div>
        <h4 className="text-sm font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-manrope)" }}>
          {t.contact.info.follow_us}
        </h4>
        <div className="flex gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 text-gray-500 transition-all hover:bg-red-primary hover:text-white"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}