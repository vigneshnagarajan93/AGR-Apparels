"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "./ui/magnetic-button";
import { useRef } from "react";

const categories = [
  {
    title: "Men's Performance",
    subtitle: "Category 01",
    desc: "Designing high-volume casualwear, fancy hoodies, and active sandos built for longevity and urban wear.",
    image: "/mens_hoodie_1775701368581.png",
  },
  {
    title: "Women's Elegance",
    subtitle: "Category 02",
    desc: "Fluid V-necks and trend-forward spaghetti tops manufactured with our proprietary breathable cotton-viscose blends.",
    image: "/ladies_top_1775701383188.png",
  },
  {
    title: "Kids & Baby",
    subtitle: "Category 03",
    desc: "Chemical-free, exceptionally soft plain and fancy baby rompers manufactured under the strictest textile safety standards.",
    image: "/baby_romper_1775701397382.png",
  },
];

export function HorizontalCategories() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-66.66%"]);

  return (
    <section ref={targetRef} id="collections" className="relative h-[300vh] bg-white/30 backdrop-blur-sm">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold text-[#2D2727] tracking-tighter mb-4">
              Our <br /> Collections.
            </h2>
            <p className="text-[#4A544F] text-xl max-w-lg font-light mt-6">
              Three decades of mastery. GOTS-certified organic threads turned into globally demanded silhouettes.
            </p>
          </div>
          <div className="hidden md:block">
             <MagneticButton>
               <button className="flex items-center gap-3 bg-[#f7efe5] rounded-full p-4 pr-6 text-[#2D2727] font-medium hover:bg-[#2D2727] hover:text-white transition-colors duration-300 group">
                 <span className="bg-[#2D2727] text-white rounded-full p-2 group-hover:bg-white group-hover:text-[#2D2727] transition-colors">
                   <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                 </span>
                 View Detailed Catalog
               </button>
             </MagneticButton>
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 w-[300vw] sm:w-[200vw] lg:w-[150vw]">
          {categories.map((category, index) => (
            <div key={index} className="relative w-full h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden group bg-[#FAFAFA]">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-[2s] ease-[0.16,1,0.3,1] opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full">
                 <p className="text-[#9EAC90] uppercase tracking-[0.2em] text-sm md:text-xs mb-3 font-medium">{category.subtitle}</p>
                 <h3 className="text-4xl md:text-5xl text-white font-semibold mb-4 leading-none tracking-tight">{category.title}</h3>
                 <p className="text-white/80 max-w-md text-sm md:text-base font-light">{category.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
