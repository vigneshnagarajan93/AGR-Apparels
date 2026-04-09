"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { TextReveal } from "./ui/text-reveal";
import { MagneticButton } from "./ui/magnetic-button";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const image1Y = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const image2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const image3Y = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden bg-white">
      {/* Parallax Floating Elements */}
      <motion.div style={{ y: image1Y }} className="absolute -left-12 top-20 opacity-80 mix-blend-multiply w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
        <Image src="/cotton_boll_white.png" alt="Pure Organic Cotton" fill className="object-contain" />
      </motion.div>
      
      <motion.div style={{ y: image2Y }} className="absolute -right-20 top-1/2 opacity-70 mix-blend-multiply w-[250px] h-[250px] md:w-[350px] md:h-[350px] hidden md:block">
         <Image src="/premium_fabric_roll_white.png" alt="Premium Fabric" fill className="object-contain transform rotate-12" />
      </motion.div>

      <motion.div style={{ y: image3Y }} className="absolute left-[15%] bottom-10 opacity-30 mix-blend-multiply w-[150px] h-[150px] filter blur-sm">
         <Image src="/cotton_boll_white.png" alt="Cotton Float" fill className="object-contain transform -rotate-45" />
      </motion.div>

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
            For over 30 years, AGR Apparels has bridged local mastery with global scale. We don't just manufacture garments; we engineer sustainable supply chains for Europe's most discerning brands.
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
