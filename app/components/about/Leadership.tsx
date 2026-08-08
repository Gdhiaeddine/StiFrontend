"use client";

import { motion } from "framer-motion";
import { useTranslations } from "../../[locale]/use-translations";

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const gradients = [
  "from-red-primary to-red-accent",
  "from-gray-700 to-gray-900",
  "from-gray-600 to-gray-800",
  "from-red-accent to-red-primary",
  "from-gray-800 to-gray-900",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Leadership() {
  const t = useTranslations();
  const leadT = t.aboutPage.leadership;

  return (
    <section className="py-28 lg:py-36 bg-gray-50">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            {leadT.badge}
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            {leadT.title}
          </h2>
          <p className="mx-auto max-w-xl text-gray-500">
            {leadT.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {leadT.team.map((person, idx) => (
            <motion.article
              key={person.name}
              variants={item}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_16px_56px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="flex items-center justify-center bg-gray-50 p-8">
                <div className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${gradients[idx % gradients.length]} text-xl font-bold text-white transition-transform duration-500 group-hover:scale-110`}>
                  {person.initials}
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-1 text-base font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
                  {person.name}
                </h3>
                <div className="mb-3 text-xs font-semibold text-red-primary">{person.position}</div>
                <p className="mb-4 text-xs leading-relaxed text-gray-500">{person.bio}</p>
                <a
                  href="#"
                  aria-label={`LinkedIn profile of ${person.name}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-400 transition-all hover:bg-red-primary hover:text-white"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
