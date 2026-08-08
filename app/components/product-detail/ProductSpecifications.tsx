"use client";

import { motion } from "framer-motion";
import type { Product } from "../../data/products";

export default function ProductSpecifications({ product }: { product: Product }) {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            Specifications
          </span>
          <h2
            className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Product Specifications
          </h2>
        </motion.div>

        {/* Specifications Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-red-primary/5">
                  <th className="text-left rtl:text-right py-4 px-6 text-sm font-bold text-gray-900">Feature</th>
                  <th className="text-left rtl:text-right py-4 px-6 text-sm font-bold text-gray-900">Value</th>
                </tr>
              </thead>
              <tbody>
                {product.specifications.map((spec, index) => (
                  <tr
                    key={spec.label}
                    className={`border-t border-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                  >
                    <td className="py-4 px-6 text-sm text-gray-500">{spec.label}</td>
                    <td className="py-4 px-6 text-sm font-semibold text-gray-900">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}