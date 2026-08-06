"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks";

export default function CompanyStory() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid gap-12 lg:grid-cols-2 items-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left — Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/assets/hero.png"
                alt="STI office and team"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-3xl bg-red-primary/5 -z-10" />
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-3xl bg-red-primary/8 -z-10" />
          </div>

          {/* Right — Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary"
            >
              Our Story
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-3xl font-extrabold text-gray-900 lg:text-4xl"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Building Algeria&apos;s Telecom Future
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-gray-500 leading-relaxed"
            >
              <p>
                Founded in 2023, SARL Smart Technologie Innovation began with a clear vision:
                to bridge the gap between Algeria&apos;s growing telecommunications needs and
                world-class distribution services. What started as a small team with big ambitions
                has grown into one of the nation&apos;s most trusted telecom distributors.
              </p>
              <p>
                As the official Ooredoo distributor, we serve thousands of customers and business partners
                across all 58 provinces of Algeria. Our commitment to excellence,
                innovation, and customer satisfaction has earned us a reputation as the go-to
                partner for telecommunications solutions.
              </p>
              <p>
                Today, STI continues to expand its services, embracing digital transformation
                and bringing cutting-edge connectivity solutions to businesses and individuals
                throughout the country.
              </p>
            </motion.div>

            {/* CEO Signature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 inline-block rounded-2xl border border-gray-100 bg-white/80 px-6 py-4 shadow-[0_2px_16px_rgba(0,0,0,0.04)] backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-primary to-red-accent text-sm font-bold text-white">
                  MB
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Mohamed Boudiaf</div>
                  <div className="text-xs text-gray-500">Chief Executive Officer</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
