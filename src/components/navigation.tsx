"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MagneticButton } from "./ui/magnetic-button";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "glass-nav py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter mix-blend-difference top-0 text-white">
          AGR<span className="text-[#9EAC90]">.</span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center font-medium text-sm">
          <Link href="#expertise" className="hover:text-[#4F6F52] transition-colors">Expertise</Link>
          <Link href="#collections" className="hover:text-[#4F6F52] transition-colors">Collections</Link>
          <Link href="#sustainability" className="hover:text-[#4F6F52] transition-colors">Sustainability</Link>
          
          <MagneticButton>
            <button className="bg-[#4F6F52] text-[#F7EFE5] px-6 py-2.5 rounded-full hover:bg-[#2D2727] transition-all duration-300 ml-4 font-medium">
              Start Your Sustainable Journey
            </button>
          </MagneticButton>
        </nav>

        <button className="md:hidden text-white mix-blend-difference">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.header>
  );
}
