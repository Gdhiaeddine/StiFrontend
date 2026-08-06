"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Props {
  badge: string;
  title: string;
  description: string[];
  highlights?: string[];
  illustration: "recharge" | "sim" | "wholesale" | "retail" | "partnership" | "support";
}

function Illustration({ type }: { type: Props["illustration"] }) {
  const configs: Record<string, React.ReactNode> = {
    recharge: (
      <svg viewBox="0 0 500 500" fill="none" className="w-full h-full" aria-hidden="true">
        <g opacity="0.08"><circle cx="250" cy="250" r="180" stroke="#D71920" strokeWidth="1" strokeDasharray="4 6" fill="none" /></g>
        <rect x="140" y="150" width="100" height="160" rx="14" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="152" y="168" width="30" height="22" rx="4" fill="#D71920" opacity="0.2" />
        <line x1="152" y1="210" x2="228" y2="210" stroke="#E5E7EB" strokeWidth="1" />
        <line x1="152" y1="230" x2="210" y2="230" stroke="#E5E7EB" strokeWidth="0.5" />
        <text x="190" y="265" textAnchor="middle" fill="#D71920" fontSize="11" fontWeight="bold">OOREDOO</text>
        <text x="190" y="282" textAnchor="middle" fill="#6B7280" fontSize="8">RECHARGE</text>
        <rect x="270" y="170" width="100" height="70" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="282" y="182" width="30" height="10" rx="3" fill="#D71920" opacity="0.3" />
        <line x1="282" y1="205" x2="358" y2="205" stroke="#E5E7EB" strokeWidth="0.5" />
        <line x1="282" y1="218" x2="340" y2="218" stroke="#E5E7EB" strokeWidth="0.5" />
        <text x="320" y="235" textAnchor="middle" fill="#6B7280" fontSize="7">1000 DA</text>
        <rect x="270" y="260" width="100" height="70" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="282" y="272" width="30" height="10" rx="3" fill="#D71920" opacity="0.25" />
        <text x="320" y="325" textAnchor="middle" fill="#6B7280" fontSize="7">500 DA</text>
        <rect x="270" y="350" width="100" height="70" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="282" y="362" width="30" height="10" rx="3" fill="#D71920" opacity="0.2" />
        <text x="320" y="405" textAnchor="middle" fill="#6B7280" fontSize="7">200 DA</text>
        <g opacity="0.12">
          <circle cx="120" cy="350" r="30" stroke="#D71920" strokeWidth="1" strokeDasharray="3 5" fill="none" />
          <text x="120" y="355" textAnchor="middle" fill="#D71920" fontSize="8">DZ</text>
        </g>
        <circle cx="200" cy="420" r="2" fill="#D71920" opacity="0.2">
          <animate attributeName="opacity" values="0.1;0.35;0.1" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="380" cy="150" r="2" fill="#D71920" opacity="0.15">
          <animate attributeName="opacity" values="0.05;0.25;0.05" dur="4s" begin="1s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    sim: (
      <svg viewBox="0 0 500 500" fill="none" className="w-full h-full" aria-hidden="true">
        <g opacity="0.08"><circle cx="250" cy="250" r="180" stroke="#D71920" strokeWidth="1" strokeDasharray="4 6" fill="none" /></g>
        <g>
          <rect x="160" y="100" width="120" height="180" rx="16" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
          <rect x="172" y="118" width="36" height="28" rx="5" fill="#D71920" opacity="0.2" />
          <path d="M172 160 h96" stroke="#E5E7EB" strokeWidth="0.8" />
          <path d="M172 180 h96" stroke="#E5E7EB" strokeWidth="0.5" />
          <text x="220" y="215" textAnchor="middle" fill="#D71920" fontSize="12" fontWeight="bold">OOREDOO</text>
          <text x="220" y="235" textAnchor="middle" fill="#6B7280" fontSize="8">PREPAID SIM</text>
          <circle cx="252" cy="265" r="12" stroke="#D71920" strokeWidth="1" fill="none" opacity="0.3" />
          <text x="252" y="269" textAnchor="middle" fill="#D71920" fontSize="7">4G</text>
        </g>
        <g>
          <rect x="300" y="130" width="100" height="140" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
          <rect x="310" y="145" width="28" height="20" rx="4" fill="#D71920" opacity="0.15" />
          <text x="350" y="210" textAnchor="middle" fill="#6B7280" fontSize="7">MINI SIM</text>
        </g>
        <g>
          <rect x="100" y="320" width="100" height="140" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
          <rect x="110" y="335" width="28" height="20" rx="4" fill="#D71920" opacity="0.15" />
          <text x="150" y="400" textAnchor="middle" fill="#6B7280" fontSize="7">NANO SIM</text>
        </g>
        <g opacity="0.1">
          <rect x="230" y="340" width="140" height="100" rx="10" fill="#D71920" opacity="0.05" />
          <text x="300" y="395" textAnchor="middle" fill="#D71920" fontSize="9" fontWeight="bold">58 PROVINCES</text>
          <text x="300" y="415" textAnchor="middle" fill="#6B7280" fontSize="7">COVERAGE</text>
        </g>
        <circle cx="420" cy="300" r="2" fill="#D71920" opacity="0.2">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    wholesale: (
      <svg viewBox="0 0 500 500" fill="none" className="w-full h-full" aria-hidden="true">
        <g opacity="0.08"><circle cx="250" cy="250" r="180" stroke="#D71920" strokeWidth="1" strokeDasharray="4 6" fill="none" /></g>
        <rect x="80" y="200" width="200" height="140" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="95" y="215" width="50" height="35" rx="4" fill="#D71920" opacity="0.08" />
        <rect x="155" y="215" width="50" height="35" rx="4" fill="#D71920" opacity="0.06" />
        <rect x="215" y="215" width="50" height="35" rx="4" fill="#D71920" opacity="0.08" />
        <rect x="95" y="260" width="50" height="35" rx="4" fill="#D71920" opacity="0.06" />
        <rect x="155" y="260" width="50" height="35" rx="4" fill="#D71920" opacity="0.08" />
        <rect x="215" y="260" width="50" height="35" rx="4" fill="#D71920" opacity="0.06" />
        <rect x="95" y="305" width="50" height="25" rx="4" fill="#D71920" opacity="0.04" />
        <rect x="155" y="305" width="50" height="25" rx="4" fill="#D71920" opacity="0.04" />
        <rect x="215" y="305" width="50" height="25" rx="4" fill="#D71920" opacity="0.04" />
        <rect x="320" y="240" width="120" height="80" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <path d="M340 260 L370 250 L400 265 L420 255" stroke="#D71920" strokeWidth="1.5" fill="none" opacity="0.3" />
        <rect x="340" y="285" width="30" height="15" rx="3" fill="#D71920" opacity="0.1" />
        <rect x="380" y="285" width="30" height="15" rx="3" fill="#D71920" opacity="0.08" />
        <rect x="340" y="310" width="70" height="2" rx="1" fill="#E5E7EB" />
        <rect x="340" y="318" width="50" height="2" rx="1" fill="#E5E7EB" />
        <text x="250" y="400" textAnchor="middle" fill="#D71920" fontSize="11" fontWeight="bold">WHOLESALE DISTRIBUTION</text>
        <circle cx="150" cy="160" r="2" fill="#D71920" opacity="0.2">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    retail: (
      <svg viewBox="0 0 500 500" fill="none" className="w-full h-full" aria-hidden="true">
        <g opacity="0.08"><circle cx="250" cy="250" r="180" stroke="#D71920" strokeWidth="1" strokeDasharray="4 6" fill="none" /></g>
        <rect x="100" y="180" width="300" height="180" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="120" y="200" width="60" height="80" rx="6" fill="#D71920" opacity="0.08" />
        <rect x="190" y="200" width="60" height="80" rx="6" fill="#D71920" opacity="0.06" />
        <rect x="260" y="200" width="60" height="80" rx="6" fill="#D71920" opacity="0.08" />
        <rect x="330" y="200" width="50" height="80" rx="6" fill="#D71920" opacity="0.05" />
        <rect x="120" y="295" width="60" height="4" rx="2" fill="#E5E7EB" />
        <rect x="190" y="295" width="60" height="4" rx="2" fill="#E5E7EB" />
        <rect x="260" y="295" width="60" height="4" rx="2" fill="#E5E7EB" />
        <rect x="120" y="310" width="40" height="3" rx="1.5" fill="#E5E7EB" />
        <rect x="190" y="310" width="40" height="3" rx="1.5" fill="#E5E7EB" />
        <rect x="260" y="310" width="40" height="3" rx="1.5" fill="#E5E7EB" />
        <text x="250" y="365" textAnchor="middle" fill="#D71920" fontSize="9" fontWeight="bold">RETAIL DISPLAY</text>
        <rect x="180" y="390" width="140" height="50" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="195" y="402" width="25" height="8" rx="2" fill="#D71920" opacity="0.2" />
        <text x="250" y="428" textAnchor="middle" fill="#6B7280" fontSize="7">COUNTER</text>
        <circle cx="130" cy="150" r="2" fill="#D71920" opacity="0.2">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    partnership: (
      <svg viewBox="0 0 500 500" fill="none" className="w-full h-full" aria-hidden="true">
        <g opacity="0.08"><circle cx="250" cy="250" r="180" stroke="#D71920" strokeWidth="1" strokeDasharray="4 6" fill="none" /></g>
        <circle cx="180" cy="220" r="60" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <circle cx="320" cy="220" r="60" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <circle cx="250" cy="320" r="60" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <circle cx="250" cy="230" r="20" fill="#D71920" opacity="0.1" />
        <text x="250" y="235" textAnchor="middle" fill="#D71920" fontSize="10" fontWeight="bold">STI</text>
        <circle cx="180" cy="220" r="30" fill="#D71920" opacity="0.06" />
        <text x="180" y="224" textAnchor="middle" fill="#D71920" fontSize="8">Ooredoo</text>
        <circle cx="320" cy="220" r="30" fill="#D71920" opacity="0.06" />
        <text x="320" y="224" textAnchor="middle" fill="#D71920" fontSize="7">Retailers</text>
        <circle cx="250" cy="320" r="30" fill="#D71920" opacity="0.06" />
        <text x="250" y="324" textAnchor="middle" fill="#D71920" fontSize="7">Partners</text>
        <line x1="210" y1="245" x2="235" y2="275" stroke="#D71920" strokeWidth="1" opacity="0.2" />
        <line x1="290" y1="245" x2="265" y2="275" stroke="#D71920" strokeWidth="1" opacity="0.2" />
        <line x1="220" y1="270" x2="280" y2="270" stroke="#D71920" strokeWidth="1" opacity="0.15" />
        <circle cx="150" cy="140" r="2" fill="#D71920" opacity="0.2">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    support: (
      <svg viewBox="0 0 500 500" fill="none" className="w-full h-full" aria-hidden="true">
        <g opacity="0.08"><circle cx="250" cy="250" r="180" stroke="#D71920" strokeWidth="1" strokeDasharray="4 6" fill="none" /></g>
        <rect x="120" y="140" width="260" height="180" rx="14" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="140" y="160" width="100" height="14" rx="3" fill="#D71920" opacity="0.1" />
        <rect x="140" y="184" width="220" height="6" rx="2" fill="#E5E7EB" />
        <rect x="140" y="198" width="180" height="6" rx="2" fill="#E5E7EB" />
        <rect x="140" y="220" width="80" height="28" rx="6" fill="#D71920" opacity="0.12" />
        <text x="180" y="238" textAnchor="middle" fill="#D71920" fontSize="8" fontWeight="bold">CRM</text>
        <rect x="230" y="220" width="80" height="28" rx="6" fill="#22C55E" opacity="0.12" />
        <text x="270" y="238" textAnchor="middle" fill="#22C55E" fontSize="8" fontWeight="bold">CHAT</text>
        <rect x="320" y="220" width="40" height="28" rx="6" fill="#3B82F6" opacity="0.12" />
        <text x="340" y="238" textAnchor="middle" fill="#3B82F6" fontSize="8" fontWeight="bold">TEL</text>
        <rect x="140" y="260" width="220" height="40" rx="6" fill="#F8FAFC" />
        <rect x="155" y="270" width="30" height="20" rx="4" fill="#D71920" opacity="0.1" />
        <rect x="195" y="270" width="140" height="4" rx="2" fill="#E5E7EB" />
        <rect x="195" y="280" width="100" height="4" rx="2" fill="#E5E7EB" />
        <rect x="100" y="350" width="120" height="60" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="115" y="362" width="20" height="14" rx="3" fill="#D71920" opacity="0.15" />
        <text x="160" y="395" textAnchor="middle" fill="#6B7280" fontSize="7">PHONE</text>
        <rect x="280" y="350" width="120" height="60" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="295" y="362" width="20" height="14" rx="3" fill="#D71920" opacity="0.15" />
        <text x="340" y="395" textAnchor="middle" fill="#6B7280" fontSize="7">EMAIL</text>
        <circle cx="200" cy="120" r="2" fill="#D71920" opacity="0.2">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
  };

  return <>{configs[type]}</>;
}

export default function HeroSolution({ badge, title, description, highlights, illustration }: Props) {
  const checklist = highlights || [
    "Official Ooredoo Products",
    "Reliable Availability",
    "Business Ready",
    "Professional Support",
  ];

  return (
    <section className="relative min-h-[calc(100vh-88px)] lg:min-h-screen flex items-center bg-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #C8102E 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Breadcrumb"
          className="mb-6 sm:mb-8"
        >
          <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
            <li>
              <Link href="/" className="transition-colors hover:text-red-primary">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight size={12} />
            </li>
            <li>
              <Link href="/solutions" className="transition-colors hover:text-red-primary">
                Solutions
              </Link>
            </li>
            <li>
              <ChevronRight size={12} />
            </li>
            <li className="text-gray-700 truncate max-w-[200px] sm:max-w-none">{title}</li>
          </ol>
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="max-w-[600px] mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="mb-3 sm:mb-4 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
                {badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-5 sm:mb-6 text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.15] tracking-tight text-gray-900"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              {title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {description.map((p, i) => (
                <p
                  key={i}
                  className={`text-gray-500 leading-relaxed ${
                    i === 0 ? "mb-3 sm:mb-4 text-base sm:text-lg" : "mb-2.5 sm:mb-3 text-sm sm:text-base"
                  }`}
                >
                  {p}
                </p>
              ))}
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-8 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 sm:gap-x-8"
            >
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
                  <Check size={16} className="shrink-0 text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-red-primary px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-red-primary/20 transition-all duration-300 hover:bg-red-primary/90 hover:shadow-xl hover:shadow-red-primary/25 hover:scale-[1.03]"
              >
                Become a Partner
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-[15px] font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md hover:scale-[1.03]"
              >
                Contact Sales
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[500px] lg:max-w-[650px] aspect-square mx-auto lg:mx-0 lg:-ml-6">
              <Illustration type={illustration} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
