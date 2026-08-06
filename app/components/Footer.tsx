"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTranslations } from "../[locale]/use-translations";

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

export default function Footer() {
  const t = useTranslations();

  const columns = [
    {
      title: t.footer.company,
      links: [
        { label: t.footer.about, href: "#about" },
        { label: t.footer.careers, href: "#" },
        { label: t.footer.news, href: "#news" },
        { label: t.footer.contact_link, href: "#contact" },
      ],
    },
    {
      title: t.footer.solutions,
      links: [
        { label: t.footer.mobile_recharge, href: "#solutions" },
        { label: t.footer.sim_activation, href: "#solutions" },
        { label: t.footer.enterprise_link, href: "#enterprise" },
        { label: t.footer.internet, href: "#solutions" },
        { label: t.footer.support, href: "#support" },
      ],
    },
    {
      title: t.footer.resources,
      links: [
        { label: t.footer.faq, href: "#support" },
        { label: t.footer.documentation, href: "#" },
        { label: t.footer.privacy_policy, href: "#" },
        { label: t.footer.terms, href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 pt-20 pb-8">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="grid gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <Image
                src="/assets/logo.png"
                alt="STI - Smart Technologie Innovation"
                width={200}
                height={70}
                className="h-14 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-gray-400">
              {t.footer.brand_description}
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-gray-400 transition-all hover:bg-red-primary hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-bold text-white" style={{ fontFamily: "var(--font-manrope)" }}>
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-white" style={{ fontFamily: "var(--font-manrope)" }}>
              {t.footer.contact}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 shrink-0 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-300">0550 123 456</div>
                  <div className="text-xs text-gray-500">{t.footer.phone_hours}</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 shrink-0 text-gray-500" />
                <span className="text-sm text-gray-300">contact@sti-dz.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-gray-500" />
                <span className="text-sm text-gray-300">{t.footer.location}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={15} className="mt-0.5 shrink-0 text-gray-500" />
                <span className="text-sm text-gray-300">{t.footer.hours_full}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-500 transition-colors hover:text-white">{t.footer.privacy}</a>
            <a href="#" className="text-xs text-gray-500 transition-colors hover:text-white">{t.footer.terms_link}</a>
            <a href="#" className="text-xs text-gray-500 transition-colors hover:text-white">{t.footer.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
