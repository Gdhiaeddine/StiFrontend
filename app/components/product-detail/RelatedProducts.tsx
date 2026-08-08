"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CreditCard } from "lucide-react";
import { usePathname } from "next/navigation";
import type { Product } from "../../data/products";

interface RelatedProductsProps {
  products: Product[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function RelatedProducts({ products }: RelatedProductsProps) {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-gray-50">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            Related
          </span>
          <h2
            className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-extrabold text-gray-900 lg:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Explore Related Products
          </h2>
          <p className="mx-auto max-w-xl text-sm sm:text-base text-gray-500">
            Discover other official Ooredoo recharge credit and SIM card options
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product) => (
            <motion.article
              key={product.slug}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_12px_48px_rgba(200,16,46,0.08)] flex flex-col h-full"
            >
              {/* Red accent line */}
              <div className="absolute left-0 top-0 h-[3px] w-0 bg-red-primary transition-all duration-500 group-hover:w-full" />

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-primary/10 text-red-primary transition-colors group-hover:bg-red-primary group-hover:text-white">
                <CreditCard size={24} />
              </div>

              <h3 className="mb-3 text-lg font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
                {product.name}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-500">{product.shortDescription}</p>
              <Link
                href={`/${currentLocale}/products/${product.slug}`}
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-red-primary transition-colors hover:text-red-accent"
              >
                View Details
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}