import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "AGR Apparels | Premium Organic Textile Manufacturer India",
  description: "Discover Tiruppur's premier B2B garment manufacturer. For over 30 years, we've delivered sustainable, GOTS-certified organic apparel powered by 50% solar energy.",
  keywords: "Organic Textile Manufacturer India, Sustainable Babywear Bulk Production, European Custom Garment Export, Tiruppur Clothing Manufacturer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} font-sans antialiased`}>
        <div className="bg-noise" />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
