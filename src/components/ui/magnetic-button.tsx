"use client";

import { motion, useSpring } from "framer-motion";
import { useRef, useState } from "react";

export function MagneticButton({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.4);
    y.set(middleY * 0.4);
  };

  const reset = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
       className="relative inline-flex items-center justify-center cursor-pointer p-4 -m-4"
       ref={ref}
       onMouseMove={handleMouse}
       onMouseEnter={() => setIsHovered(true)}
       onMouseLeave={reset}
       onClick={onClick}
    >
      <motion.div
        style={{ x, y }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
