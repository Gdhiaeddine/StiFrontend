"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex items-center bg-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #C8102E 1px, transparent 0)",
        backgroundSize: "48px 48px",
      }} />

      <div className="relative mx-auto w-full max-w-[1320px] px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Breadcrumb"
          className="mb-8"
        >
          <ol className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
            <li><Link href="/" className="transition-colors hover:text-red-primary">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li className="text-gray-700">About</li>
          </ol>
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
                About Us
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 lg:text-5xl xl:text-6xl"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              About <span className="text-red-primary">STI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-lg text-lg leading-relaxed text-gray-500"
            >
              SARL Smart Technologie Innovation is Algeria&apos;s official Ooredoo distributor,
              delivering innovative telecommunications solutions with excellence and trust since 2023.
            </motion.p>
          </div>

          {/* Right — Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[480px] aspect-square mx-auto">
              {/* Red ring */}
              <div className="absolute inset-8 rounded-full border-[3px] border-red-primary/15" />
              <div className="absolute inset-16 rounded-full border border-red-primary/8" />

              {/* Tower */}
              <svg viewBox="0 0 400 400" fill="none" className="w-full h-full" aria-hidden="true">
                {/* Network dots */}
                <circle cx="80" cy="120" r="3" fill="#C8102E" opacity="0.2" />
                <circle cx="320" cy="100" r="2.5" fill="#C8102E" opacity="0.15" />
                <circle cx="60" cy="280" r="2" fill="#C8102E" opacity="0.15" />
                <circle cx="340" cy="300" r="3" fill="#C8102E" opacity="0.2" />
                <circle cx="200" cy="60" r="2" fill="#C8102E" opacity="0.1" />

                {/* Network lines */}
                <line x1="80" y1="120" x2="200" y2="180" stroke="#C8102E" strokeWidth="0.5" opacity="0.12" />
                <line x1="320" y1="100" x2="200" y2="180" stroke="#C8102E" strokeWidth="0.5" opacity="0.12" />
                <line x1="60" y1="280" x2="200" y2="220" stroke="#C8102E" strokeWidth="0.5" opacity="0.1" />
                <line x1="340" y1="300" x2="200" y2="220" stroke="#C8102E" strokeWidth="0.5" opacity="0.1" />

                {/* Tower structure */}
                <path d="M190 320 L210 320 L205 150 L195 150 Z" fill="#C8102E" opacity="0.08" stroke="#C8102E" strokeWidth="0.8" />
                <line x1="180" y1="200" x2="220" y2="200" stroke="#C8102E" strokeWidth="1" opacity="0.25" />
                <line x1="183" y1="240" x2="217" y2="240" stroke="#C8102E" strokeWidth="0.8" opacity="0.2" />
                <line x1="186" y1="280" x2="214" y2="280" stroke="#C8102E" strokeWidth="0.6" opacity="0.15" />
                <line x1="200" y1="150" x2="200" y2="115" stroke="#C8102E" strokeWidth="1.5" opacity="0.35" />

                {/* Signal waves */}
                <path d="M200 125 Q212 112 218 125" stroke="#C8102E" strokeWidth="1" fill="none" opacity="0.3">
                  <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2s" repeatCount="indefinite" />
                </path>
                <path d="M200 125 Q225 100 235 125" stroke="#C8102E" strokeWidth="0.7" fill="none" opacity="0.2">
                  <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" begin="0.4s" repeatCount="indefinite" />
                </path>
                <path d="M200 125 Q188 112 182 125" stroke="#C8102E" strokeWidth="1" fill="none" opacity="0.3">
                  <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2s" repeatCount="indefinite" />
                </path>
                <path d="M200 125 Q175 100 165 125" stroke="#C8102E" strokeWidth="0.7" fill="none" opacity="0.2">
                  <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" begin="0.4s" repeatCount="indefinite" />
                </path>

                {/* City skyline */}
                <rect x="90" y="290" width="30" height="60" rx="2" fill="#E5E7EB" opacity="0.4" />
                <rect x="125" y="260" width="25" height="90" rx="2" fill="#E5E7EB" opacity="0.35" />
                <rect x="250" y="270" width="28" height="80" rx="2" fill="#E5E7EB" opacity="0.35" />
                <rect x="285" y="295" width="32" height="55" rx="2" fill="#E5E7EB" opacity="0.3" />

                {/* Particles */}
                <circle cx="140" cy="90" r="1.5" fill="#C8102E" opacity="0.2">
                  <animate attributeName="opacity" values="0.1;0.35;0.1" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="180" r="1" fill="#FF4B55" opacity="0.15">
                  <animate attributeName="opacity" values="0.05;0.25;0.05" dur="4s" begin="1s" repeatCount="indefinite" />
                </circle>
                <circle cx="100" cy="220" r="1.5" fill="#C8102E" opacity="0.15">
                  <animate attributeName="opacity" values="0.05;0.2;0.05" dur="3.5s" begin="0.5s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
