"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: MapPin, value: "58", label: "Provinces Covered" },
  { icon: Users, value: "Expert", label: "Professional Team" },
  { icon: Award, value: "100%", label: "Official Distributor" },
  { icon: TrendingUp, value: "Growing", label: "Nationwide Presence" },
];

export default function CompanyCulture() {
  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[650px] aspect-square mx-auto lg:mx-0">
              <Image
                src="/assets/company-culture.png"
                alt="Life at STI - Company Culture"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
              Company Culture
            </span>
            <h2
              className="mb-6 text-3xl font-extrabold text-gray-900 lg:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Life at STI
            </h2>
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-10">
              At STI, we believe our people are our greatest strength. We foster collaboration, continuous learning, and a culture of excellence while supporting our partners across Algeria.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-primary/10 rounded-2xl flex items-center justify-center shrink-0 text-red-primary">
                    <stat.icon size={22} />
                  </div>
                  <div>
                    <div
                      className="text-xl font-extrabold text-gray-900"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}