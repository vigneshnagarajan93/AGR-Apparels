import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { HorizontalCategories } from "@/components/horizontal-categories";
import { ManufacturingCapabilities } from "@/components/manufacturing-capabilities";
import { LegacyTimeline } from "@/components/legacy-timeline";
import { SeedToStitch } from "@/components/seed-to-stitch";
import { Marquee } from "@/components/marquee";
import { Background3D } from "@/components/background-3d";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative">
      <Background3D />
      <div className="relative z-10">
        <Navigation />
      <Hero />
      
      {/* 2. Fabric Phase (Legacy & Seed) */}
      <div className="min-h-screen py-32 flex flex-col justify-center">
        <LegacyTimeline />
        <Marquee />
        <SeedToStitch />
      </div>

      {/* 3. Shirt Phase (Categories & Capabilities) */}
      <div className="min-h-screen py-32 flex flex-col justify-center">
        <HorizontalCategories />
        <ManufacturingCapabilities />
      </div>

      {/* 4. Box/Shipping Phase (Footer) */}
      <footer className="min-h-screen bg-[#4F6F52]/90 backdrop-blur-sm py-24 flex flex-col items-center justify-center text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-noise pointer-events-none opacity-20" />
         <div className="container relative z-10 mx-auto px-6 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to scale ethically?</h2>
            <p className="text-lg font-light mb-10 text-white/90">
              Partner with the textile manufacturer trusted by Europe&apos;s finest fashion houses since 1990.
            </p>
            <button className="bg-white text-[#4F6F52] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2D2727] hover:text-white transition-all duration-300 shadow-xl hover:-translate-y-1 transform">
              Start Your Sustainable Journey
            </button>
         </div>
      </footer>
      </div>
    </main>
  );
}
