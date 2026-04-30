"use client";

import { motion } from "framer-motion";

const milestones = [
  { year: "1990", title: "The Foundation", desc: "Established in Tiruppur, beginning with small-batch knitwear." },
  { year: "2005", title: "European Expansion", desc: "First major container exported to the European market, meeting strict EU quality standards." },
  { year: "2018", title: "Solar Transition", desc: "Achieved 50% solar power integration across all manufacturing units." },
  { year: "2024", title: "GOTS Certification", desc: "Fully certified organic textile processes validating our seed-to-stitch narrative." },
];

export function LegacyTimeline() {
  return (
    <section id="expertise" className="py-32 bg-white/40 backdrop-blur-md relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20 text-balance">
          <h2 className="text-5xl md:text-7xl font-bold text-[#2D2727] tracking-tighter mb-4">Discover Our Heritage</h2>
          <p className="text-[#4F6F52] font-medium tracking-[0.2em] text-sm uppercase">30 YEARS OF MANUFACTURING</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[38px] md:left-1/2 top-4 bottom-4 w-px bg-black/10 md:-translate-x-1/2" />
          
          <div className="space-y-24 md:space-y-32">
            {milestones.map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-start md:items-center justify-between md:justify-normal group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[38px] md:left-1/2 w-6 h-6 rounded-full bg-[#4F6F52] border-4 border-white -translate-x-1/2 flex items-center justify-center z-10 group-hover:scale-150 group-hover:bg-[#2D2727] transition-all duration-500 shadow-[0_0_20px_rgba(79,111,82,0.5)]">
                </div>
                
                {/* Content */}
                <div className={`w-full pl-24 md:pl-0 md:w-5/12 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                  <h3 className="text-6xl md:text-8xl font-bold text-black/5 mb-2 relative group-hover:text-black/10 transition-colors">
                     {item.year}
                     <span className="absolute left-0 bottom-6 md:bottom-8 text-2xl md:text-3xl font-semibold text-[#2D2727] block tracking-tight">
                        {item.title}
                     </span>
                  </h3>
                  <p className="text-[#2D2727]/70 font-light leading-relaxed text-lg mt-4">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
