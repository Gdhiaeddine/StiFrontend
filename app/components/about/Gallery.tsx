"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { src: "/assets/hero.png", alt: "STI modern office space", span: "col-span-1 row-span-2" },
  { src: "/assets/logo.png", alt: "STI team meeting", span: "col-span-1 row-span-1" },
  { src: "/assets/hero.png", alt: "Technical support center", span: "col-span-1 row-span-1" },
  { src: "/assets/logo.png", alt: "Product warehouse", span: "col-span-1 row-span-2" },
  { src: "/assets/hero.png", alt: "Network infrastructure", span: "col-span-1 row-span-1" },
  { src: "/assets/logo.png", alt: "Business presentation", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-red-primary">
            Gallery
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl" style={{ fontFamily: "var(--font-manrope)" }}>
            Inside STI
          </h2>
          <p className="mx-auto max-w-xl text-gray-500">
            A glimpse into our offices, team, and operations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 auto-rows-[200px] lg:auto-rows-[240px]">
          {images.map((img, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${img.span}`}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.figure>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              aria-label="Close lightbox"
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Gallery preview"
              className="max-h-[80vh] max-w-full rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
