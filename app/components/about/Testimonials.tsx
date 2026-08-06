"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Benali",
    role: "IT Director, Sonatrach",
    review: "STI has been our trusted telecom partner for over 5 years. Their enterprise connectivity solutions are top-notch and their support team is always responsive.",
    initials: "AB",
    color: "from-red-primary to-red-accent",
  },
  {
    name: "Fatima Hadj",
    role: "Operations Manager, Cevital",
    review: "Switching to STI for our fleet SIM management was a game changer. The bulk recharge system saves us hours every week and the reporting is excellent.",
    initials: "FH",
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "Youcef Mansouri",
    role: "CEO, TechStart Algeria",
    review: "As a startup, we needed flexible and affordable connectivity. STI provided exactly that with their business packages and dedicated account management.",
    initials: "YM",
    color: "from-gray-600 to-gray-800",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Testimonials() {
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
            Testimonials
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Trusted by leading businesses across Algeria
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.article
              key={t.name}
              variants={item}
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white/80 p-8 shadow-[0_2px_16px_rgba(0,0,0,0.03)] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.06)] hover:-translate-y-1"
            >
              <Quote size={32} className="mb-4 text-red-primary/20" />
              <div className="mb-4 flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-xs font-bold text-white`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
