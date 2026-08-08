"use client";

import { ClipboardList, FileSearch, MessageSquare, CheckCircle, PartyPopper } from "lucide-react";
import { useScrollReveal } from "../../hooks";

const stepIcons = [
  <ClipboardList size={22} />,
  <FileSearch size={22} />,
  <MessageSquare size={22} />,
  <CheckCircle size={22} />,
  <PartyPopper size={22} />
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
      <p className="max-w-[200px] text-sm text-gray-500">
        {description}
      </p>
    </div>
  );
}

export default function RecruitmentTimeline() {
  const { ref, visible } = useScrollReveal();

  const steps = [
    { num: "01", title: "Submit Application", description: "Send your CV and application." },
    { num: "02", title: "CV Review", description: "Our HR team evaluates your profile." },
    { num: "03", title: "Interview", description: "Discuss your skills with our hiring team." },
    { num: "04", title: "Final Evaluation", description: "Assessment and offer preparation." },
    { num: "05", title: "Welcome to STI", description: "Onboarding and joining the team!" },
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
            Hiring Process
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            Our Recruitment Process
          </h2>
          <p className="mx-auto max-w-xl text-gray-500">
            A transparent and straightforward journey to joining SARL STI.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Connector Line - Perfectly centered through middle of icons */}
          <div className="absolute top-10 left-[10%] right-[10%] hidden h-[2px] bg-gradient-to-r from-red-primary/20 via-red-primary/50 to-red-primary/20 lg:block z-0" />

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => (
              <StepCard
                key={step.title}
                num={step.num}
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