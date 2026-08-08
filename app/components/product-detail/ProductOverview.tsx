"use client";

import { motion } from "framer-motion";
import { CreditCard, Tag, Package, Users, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Product } from "../../data/products";

export default function ProductOverview({ product }: { product: Product }) {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-gray-50">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Main Image Graphic */}
            <div className="relative bg-white rounded-3xl border border-gray-100 p-12 flex items-center justify-center shadow-[0_2px_20px_rgba(0,0,0,0.04)] mb-4">
              <div className="w-48 h-64 bg-red-primary rounded-3xl shadow-2xl shadow-red-primary/30 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-500">
                <CreditCard size={48} className="text-white mb-3" />
                <span className="text-white text-3xl font-extrabold" style={{ fontFamily: "var(--font-display)" }}>
                  {product.value}
                </span>
                <span className="text-white/80 text-xs font-bold tracking-widest uppercase mt-1">OOREDOO</span>
              </div>
              {/* Availability Badge */}
              <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-semibold text-green-600">{product.availability}</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] p-8">
              <h2
                className="text-xl font-extrabold text-gray-900 mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Product Information
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Tag size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-500">Category</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{product.category}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Package size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-500">Availability</span>
                  </div>
                  <span className="text-sm font-semibold text-green-600">{product.availability}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <ShoppingBag size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-500">Format</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{product.format}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Users size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-500">Suitable For</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{product.suitableFor.join(", ")}</span>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <Package size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-500">Wholesale</span>
                  </div>
                  <span className="text-sm font-semibold text-red-primary">{product.wholesale}</span>
                </div>
              </div>

              <Link
                href={`/${currentLocale}/quote`}
                className="flex items-center justify-center w-full py-3.5 rounded-full bg-red-primary text-white font-semibold shadow-lg shadow-red-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-red-primary/25 hover:scale-[1.02]"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}