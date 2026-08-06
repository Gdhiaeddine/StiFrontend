"use client";

import HeroSolution from "./HeroSolution";
import { FeaturesSection } from "./FeatureCard";
import SolutionTimeline from "./SolutionTimeline";
import RelatedCard from "./RelatedCard";
import FAQAccordion from "./FAQAccordion";
import FinalCTA from "../../FinalCTA";
import type { SolutionData } from "../../../solutions/[slug]/data";

interface Props {
  solution: SolutionData;
  related: SolutionData[];
}

export default function SolutionLayout({ solution, related }: Props) {
  return (
    <main>
      <HeroSolution
        badge={solution.badge}
        title={solution.title}
        description={solution.description}
        highlights={solution.highlights}
        illustration={solution.illustration}
      />

      <FeaturesSection features={solution.features} />

      <SolutionTimeline />

      <section className="py-20 sm:py-28 lg:py-36 bg-gray-50">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 text-center">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
              Solutions
            </span>
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
              Explore More Solutions
            </h2>
            <p className="mx-auto max-w-xl text-sm sm:text-base text-gray-500">
              Discover other STI distribution solutions tailored for your business
            </p>
          </div>
          <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <RelatedCard key={r.slug} slug={r.slug} title={r.shortName} description={r.description[0]} />
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion faqs={solution.faqs} />

      <FinalCTA />
    </main>
  );
}
