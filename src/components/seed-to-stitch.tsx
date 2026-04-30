"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, ShieldCheck, Sun } from "lucide-react";

export function SeedToStitch() {
  return (
    <section id="sustainability" className="py-32 bg-transparent text-[#2D2727] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-[#4F6F52] tracking-[0.2em] uppercase font-medium mb-4">Accountability at Scale</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-balance">
              Seed-to-Stitch.
            </h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-[#2D2727]/70">
              True quality begins at the source. At AGR Apparels, our manufacturing lifecycle is fully transparent. From sourcing GOTS-certified organic threads to powering our looms with 50% solar energy, every decision is measured against environmental impact and fabric longevity. We deliver not just zero-defect apparel, but peace of mind.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group"
          >
            <div className="mb-6 w-16 h-16 rounded-2xl bg-white flex items-center justify-center group-hover:bg-[#4F6F52] text-[#4F6F52] group-hover:text-white transition-colors duration-500 shadow-sm border border-black/5">
               <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Skin-Friendly Blends</h3>
            <p className="text-[#2D2727]/70 font-light leading-relaxed">
              We engineer proprietary Cotton Polyester, Viscose, and Spandex blends guaranteed free from harmful azo dyes, ensuring ultimate safety for sensitive skin and infant wear.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <div className="mb-6 w-16 h-16 rounded-2xl bg-white flex items-center justify-center group-hover:bg-[#4F6F52] text-[#4F6F52] group-hover:text-white transition-colors duration-500 shadow-sm border border-black/5">
               <Box className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Precision Packaging</h3>
            <p className="text-[#2D2727]/70 font-light leading-relaxed">
              Every garment undergoes individual inspection before being meticulously packed in single-piece polybags, preserving showroom-ready quality during long-haul EU shipping.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group"
          >
            <div className="mb-6 w-16 h-16 rounded-2xl bg-white flex items-center justify-center group-hover:bg-[#4F6F52] text-[#4F6F52] group-hover:text-white transition-colors duration-500 shadow-sm border border-black/5">
               <Sun className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Solar Grid Operations</h3>
            <p className="text-[#2D2727]/70 font-light leading-relaxed">
              We cut carbon overhead. Over half of our daily manufacturing wattage is generated onsite via advanced solar grids, aligning with European green supply chain mandates.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
