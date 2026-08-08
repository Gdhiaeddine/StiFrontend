"use client";

import { ClipboardList, FileText, CheckCircle, Package } from "lucide-react";
import { useScrollReveal } from "../../hooks";
import { useTranslations } from "../../[locale]/use-translations";

const stepIcons = [
  <ClipboardList size={22} />,
  <FileText size={22} />,
  <CheckCircle size={22} />,
  <Package size={22} />
];

function StepCard({ num, icon, title, description, index }: { num: string; icon: React.ReactNode; title: string; description: string; index: number }) {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`relative z-10 flex flex-col items-center text-center transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="relative mb-6">
        <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-100 bg-white text-red-primary shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          {icon}
        </div>
        <span className="absolute -right-2 -top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-red-primary text-[11px] font-bold text-white shadow-sm">
          {num}
        </span>
      </div>
      <h3 className="mb-2 text-lg font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
        {title}
      </h3>
      <p className="max-w-[220px] text-sm text-gray-500">
        {description}
      </p>
    </div>
  );
}

export default function OrderingTimeline() {
  const { ref, visible } = useScrollReveal();
  const t = useTranslations();
  const ordT = t.productsPage?.ordering || {
    badge: "How To Order",
    title: "Simple Ordering Process",
    subtitle: "Four easy steps to start ordering official Ooredoo products for your business.",
    steps: [
      { num: "01", title: "Choose Products", description: "Browse available Ooredoo product categories." },
      { num: "02", title: "Request Quote", description: "Submit your request with desired quantities." },
      { num: "03", title: "Order Confirmation", description: "Our team verifies and prepares your quote." },
      { num: "04", title: "Receive Products", description: "Receive products with rapid delivery." },
    ],
  };

  const stepsList = ordT.steps || [
    { num: "01", title: "Choose Products", description: "Browse available Ooredoo product categories." },
    { num: "02", title: "Request Quote", description: "Submit your request with desired quantities." },
    { num: "03", title: "Order Confirmation", description: "Our team verifies and prepares your quote." },
    { num: "04", title: "Receive Products", description: "Receive products with rapid delivery." },
  ];

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
            {ordT.badge}
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            {ordT.title}
          </h2>
          <p className="mx-auto max-w-xl text-gray-500">
            {ordT.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Timeline Connector Line - Perfectly centered through middle of icons */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] hidden h-[2px] bg-gradient-to-r from-red-primary/20 via-red-primary/50 to-red-primary/20 lg:block z-0" />

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {stepsList.map((step, i) => (
              <StepCard
                key={step.title}
                num={step.num || `0${i + 1}`}
                icon={stepIcons[i % stepIcons.length]}
                title={step.title}
                description={step.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}