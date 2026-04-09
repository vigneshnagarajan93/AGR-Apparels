"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "./ui/magnetic-button";

export function BentoGrid() {
  return (
    <section id="collections" className="py-32 bg-[#2D2727]">
      <div className="container mx-auto px-6">
        <div className="mb-20 md:flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6 }}
             className="flex-1"
          >
            <h2 className="text-6xl md:text-8xl font-bold text-[#F7EFE5] tracking-tighter mb-4">
              Our <br/> Collections.
            </h2>
            <p className="text-[#9EAC90] text-xl max-w-lg font-light mt-6">
              Three decades of mastery. GOTS-certified organic threads turned into globally demanded silhouettes.
            </p>
          </motion.div>

           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
           >
            <MagneticButton>
              <button className="flex items-center gap-3 bg-[#f7efe5] rounded-full p-4 pr-6 text-[#2D2727] font-medium hover:bg-white transition-colors duration-300">
                <span className="bg-[#2D2727] text-white rounded-full p-2">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </span>
                View All Categories
              </button>
            </MagneticButton>
           </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[800px] auto-rows-[300px] md:auto-rows-auto">
          {/* Main Large Column - Men's */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group group-hover:shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-shadow duration-700 bg-black"
          >
            <Image 
              src="/mens_hoodie_1775701368581.png" 
              alt="Men's Activewear" 
              fill 
              className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] opacity-70 group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full overflow-hidden">
               <motion.div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                 <p className="text-[#9EAC90] uppercase tracking-[0.2em] text-sm md:text-xs mb-3 font-medium">Category 01</p>
                 <h3 className="text-4xl md:text-5xl text-[#F7EFE5] font-semibold mb-4 leading-none tracking-tight">Performance Meets Craft</h3>
                 <p className="text-[#F7EFE5]/70 max-w-md text-sm md:text-base font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Designing high-volume casualwear, fancy hoodies, and active sandos built for longevity and urban wear.</p>
               </motion.div>
            </div>
          </motion.div>

          {/* Top Right - Women's */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 relative rounded-2xl overflow-hidden group bg-black"
          >
            <Image 
              src="/ladies_top_1775701383188.png" 
              alt="Ladies Linen Top" 
              fill 
              className="object-cover object-top group-hover:scale-105 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] opacity-60 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10 z-20 w-full overflow-hidden">
                <motion.div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                  <p className="text-[#9EAC90] uppercase tracking-[0.2em] text-xs mb-3 font-medium">Category 02</p>
                  <h3 className="text-3xl md:text-4xl text-[#F7EFE5] font-semibold mb-2 tracking-tight">Ethical Elegance</h3>
                  <p className="text-[#F7EFE5]/70 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Fluid V-necks and trend-forward spaghetti tops manufactured with our proprietary breathable cotton-viscose blends.</p>
                </motion.div>
            </div>
          </motion.div>

          {/* Bottom Right - Kids */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 relative rounded-2xl overflow-hidden group bg-black"
          >
            <Image 
              src="/baby_romper_1775701397382.png" 
              alt="Baby Romper" 
              fill 
              className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] opacity-60 group-hover:opacity-80 mix-blend-luminosity hover:mix-blend-normal"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2727]/90 via-black/30 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10 z-20 w-full overflow-hidden">
                <motion.div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                  <p className="text-[#9EAC90] uppercase tracking-[0.2em] text-xs mb-3 font-medium">Category 03</p>
                  <h3 className="text-3xl md:text-4xl text-[#F7EFE5] font-semibold mb-2 tracking-tight">Gentle Source</h3>
                  <p className="text-[#F7EFE5]/70 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Chemical-free, exceptionally soft plain and fancy baby rompers manufactured under the strictest textile safety standards.</p>
                </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
