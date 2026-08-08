"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { useScrollReveal } from "../../hooks";

export default function GoogleMapCard() {
  const { ref, visible } = useScrollReveal(0.1);

  const googleMapsUrl =
    "https://www.google.com/maps/place/SARL+Smart+Technologie+Innovation+-+STI/@36.1878916,5.4263334,19z/data=!4m6!3m5!1s0x12f315007983d29b:0xb969c549a0ef2f09!8m2!3d36.1878817!4d5.4266392";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-3xl border border-gray-100 overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] bg-white"
    >
      <div className="h-[460px] w-full bg-gray-100 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.4678129532675!2d5.4263334!3d36.1878916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f315007983d29b%3A0xb969c549a0ef2f09!2sSARL%20Smart%20Technologie%20Innovation%20-%20STI!5e0!3m2!1sen!2sdz!4v1700000000000!5m2!1sen!2sdz"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SARL Smart Technologie Innovation - STI Location"
        />

        {/* Floating location card badge */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gray-100 shadow-xl max-w-[320px]">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-primary/10 flex items-center justify-center shrink-0 text-red-primary mt-0.5">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-1" style={{ fontFamily: "var(--font-display)" }}>
                SARL Smart Technologie Innovation (STI)
              </h4>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                Official Ooredoo Distributor Headquarters, Sétif, Algeria
              </p>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-primary transition-colors hover:text-red-accent"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}