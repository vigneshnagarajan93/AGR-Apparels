"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const capabilities = [
  {
    id: "knitting",
    title: "Precision Knitting",
    desc: "Our state-of-the-art knitting unit is equipped with Meyer & Cie circular knitting machines capable of producing 10,000 kg of uniform, defect-free fabric daily. We handle single jersey, interlock, rib, and complex jacquards.",
    metrics: ["10,000kg Daily Output", "Meyer & Cie Machinery", "Zero-Defect Standards"],
  },
  {
    id: "dyeing",
    title: "Eco-Conscious Dyeing",
    desc: "We utilize low-liquor ratio dyeing processes to minimize water consumption. Our azo-free dyes are Oeko-Tex certified, ensuring brilliant colorfastness while adhering to strict European environmental regulations.",
    metrics: ["Azo-Free Colors", "Oeko-Tex Certified", "Low Water Waste"],
  },
  {
    id: "printing",
    title: "Advanced Printing",
    desc: "From rotary screen to high-definition digital placement printing, we offer vibrant, durable prints. Pigment, reactive, and discharge prints are executed flawlessly across varied blends.",
    metrics: ["Digital & Rotary", "Vibrant Colorfastness", "Intricate Detailing"],
  },
  {
    id: "stitching",
    title: "Garment Engineering",
    desc: "Our stitching lines flow optimally. Utilizing advanced Japanese sewing systems, our workforce produces 25,000 finished pieces daily, ensuring durable seams and perfect silhouettes for longevity.",
    metrics: ["25,000 Pieces Daily", "Juki & Brother Tech", "Robust Seaming"],
  }
];

export function ManufacturingCapabilities() {
  const [activeTab, setActiveTab] = useState(capabilities[0].id);

  return (
    <section className="py-32 bg-white/20 backdrop-blur-md text-[#2D2727] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
             Scale & Precision.
           </h2>
           <p className="text-[#4F6F52] font-medium tracking-[0.2em] text-sm uppercase">Vertical Manufacturing Integration</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start max-w-6xl mx-auto mt-20">
           {/* Sidebar Tabs */}
           <div className="w-full md:w-1/3 flex flex-col gap-4 relative z-10">
              {capabilities.map((cap) => (
                <button 
                  key={cap.id}
                  onClick={() => setActiveTab(cap.id)}
                  className={`text-left p-6 rounded-2xl transition-all duration-300 border ${
                     activeTab === cap.id ? 'bg-white border-[#4F6F52]/20 shadow-xl scale-105' : 'bg-transparent border-transparent hover:bg-black/5'
                  }`}
                >
                   <h3 className={`text-2xl font-semibold mb-2 ${activeTab === cap.id ? 'text-[#4F6F52]' : 'text-[#2D2727]/60'}`}>
                     {cap.title}
                   </h3>
                </button>
              ))}
           </div>

           {/* Content Area */}
           <div className="w-full md:w-2/3 bg-white/60 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white/20 min-h-[400px] flex flex-col justify-center">
              {capabilities.map((cap) => (
                 cap.id === activeTab && (
                   <motion.div
                     key={cap.id}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, ease: "easeOut" }}
                   >
                     <h4 className="text-4xl font-bold mb-6 tracking-tight">{cap.title}</h4>
                     <p className="text-lg text-[#2D2727]/70 font-light leading-relaxed mb-10">
                       {cap.desc}
                     </p>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {cap.metrics.map((metric, i) => (
                         <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#4F6F52]" />
                            <span className="font-medium text-[#2D2727]">{metric}</span>
                         </div>
                       ))}
                     </div>
                   </motion.div>
                 )
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
