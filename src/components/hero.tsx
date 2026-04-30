"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "./ui/text-reveal";
import { MagneticButton } from "./ui/magnetic-button";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden bg-transparent">
      <div className="relative z-10 flex h-full items-center justify-center text-center pt-20">
        <motion.div style={{ y: textY }} className="w-full px-6 flex flex-col items-center">
          <div className="text-xs md:text-sm font-medium tracking-[0.3em] text-[#4F6F52] uppercase mb-8 flex overflow-hidden">
             <TextReveal text="1990 • Tiruppur, India — 2026 • The European Market" />
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-[#2D2727] mb-8 leading-[0.9] flex flex-col items-center">
             <TextReveal text="The Fabric" delay={0.2} />
             <TextReveal text="of Modern Export." className="text-[#4F6F52]" delay={0.4} />
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-2xl text-[#2D2727]/70 max-w-3xl mx-auto font-light mb-12"
          >
            For over 30 years, AGR Apparels has bridged local mastery with global scale. We don&apos;t just manufacture garments; we engineer sustainable supply chains for Europe&apos;s most discerning brands.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
          >
            <MagneticButton>
              <div className="bg-[#4F6F52] text-white px-8 py-5 rounded-full text-lg font-medium hover:bg-[#2D2727] hover:scale-105 transition-all duration-300 shadow-xl">
                 Request a Factory Tour
              </div>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
