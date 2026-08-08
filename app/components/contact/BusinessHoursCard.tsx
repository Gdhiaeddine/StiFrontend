"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useTranslations } from "../../[locale]/use-translations";
import { useScrollReveal } from "../../hooks";

export default function BusinessHoursCard() {
  const t = useTranslations();
  const { ref, visible } = useScrollReveal(0.1);

  const days = t.contact.hours.days;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-primary/10 text-red-primary">
          <Clock size={18} />
        </div>
        <h3 className="text-lg font-extrabold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
          {t.contact.hours.title}
        </h3>
      </div>

      <div className="space-y-0">
        {days.map((day: { name: string; time: string; closed?: boolean }, i: number) => (
          <div
            key={day.name}
            className={`flex items-center justify-between py-3 ${
              i < days.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            <span className="text-sm font-medium text-gray-700">{day.name}</span>
            <span className={`text-sm font-semibold ${day.closed ? "text-gray-400" : "text-gray-900"}`}>
              {day.closed ? t.contact.hours.closed : day.time}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}