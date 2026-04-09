"use client";

import { motion } from "framer-motion";

const items = [
  "EUROPEAN EXPORT VOLUME: 75%",
  "✦",
  "GOTS CERTIFIED ORGANIC",
  "✦",
  "50% SOLAR POWERED MANUFACTURING",
  "✦",
  "EST. 1990 TIRUPPUR",
  "✦",
  "ADVANCED FINISHING",
  "✦",
  "FAST-TRACK DELIVERY",
  "✦"
];

export function Marquee() {
  return (
    <div className="w-full bg-white py-4 overflow-hidden flex relative z-20 border-y border-[#2D2727]/10">
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
        className="flex whitespace-nowrap"
      >
        {/* Double the content to create seamless loop */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span 
            key={index} 
            className={`mx-4 font-medium tracking-widest ${item === "✦" ? "text-xl text-[#4F6F52]" : "text-sm text-[#2D2727] opacity-80"}`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
