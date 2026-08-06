"use client";

import { Briefcase, Users, Handshake, MapPin, ThumbsUp } from "lucide-react";
import { useScrollReveal } from "../hooks";

const stats = [
  { icon: <Briefcase size={24} />, title: "Decade of Excellence", label: "Proven expertise in telecom distribution built over many years" },
  { icon: <Users size={24} />, title: "Massive Customer Base", label: "Trusted by tens of thousands of customers nationwide" },
  { icon: <Handshake size={24} />, title: "Strong Partnerships", label: "Deep and lasting relationships with business partners across Algeria" },
  { icon: <MapPin size={24} />, title: "All 58 Provinces", label: "Full nationwide coverage across every Algerian province" },
  { icon: <ThumbsUp size={24} />, title: "Top Satisfaction", label: "Industry-leading customer satisfaction and retention" },
];

function StatCard({ icon, title, label }: { icon: React.ReactNode; title: string; label: string }) {
  const { ref, visible } = useScrollReveal(0.3);

  return (
    <div
      ref={ref}
      className={`group flex flex-col items-center rounded-2xl bg-white p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(200,16,46,0.08)] hover:-translate-y-1 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-primary/8 text-red-primary transition-colors group-hover:bg-red-primary group-hover:text-white">
        {icon}
      </div>
      <div className="mb-2 text-lg font-extrabold text-gray-900 text-center" style={{ fontFamily: "var(--font-manrope)" }}>
        {title}
      </div>
      <div className="text-sm text-gray-500 text-center leading-relaxed">{label}</div>
    </div>
  );
}

export default function Statistics() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-28 lg:py-36 bg-gray-50">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
            Our Numbers Speak
          </h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Trusted by thousands of businesses and individuals across Algeria
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-5">
          {stats.map((s) => (
            <StatCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
