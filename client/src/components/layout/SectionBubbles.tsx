import { motion } from "framer-motion";
import React, { useMemo, useEffect, useState } from "react";

interface SectionBubblesProps {
  count?: number;
  className?: string;
  sideways?: boolean; // If true, concentrated on left/right. If false, full width.
}

export const SectionBubbles = React.memo(({ count: customCount, className = "", sideways = false }: SectionBubblesProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const count = useMemo(() => {
    if (customCount) return customCount;
    return isMobile ? 35 : 80; // Adaptive density
  }, [customCount, isMobile]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-[5] ${className}`}>
      {[...Array(count)].map((_, i) => {
        const isLeftOrRight = sideways ? (i < count / 2 ? 'left' : 'right') : 'any';
        
        const size = Math.random() * 12 + 4; 
        const duration = Math.random() * 12 + 8; 
        const initialOpacity = Math.random() * 0.5 + 0.25; 
        const isGold = Math.random() > 0.4;

        let leftPos: string;
        if (sideways) {
          leftPos = isLeftOrRight === 'left' ? `${Math.random() * 20}%` : `${80 + Math.random() * 20}%`;
        } else {
          leftPos = `${Math.random() * 100}%`;
        }

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            initial={{
              left: leftPos,
              top: `${Math.random() * 120}%`, 
              opacity: 0,
              scale: Math.random() * 0.5 + 0.8
            }}
            animate={{
              y: -2000, 
              opacity: [0, initialOpacity, initialOpacity, 0],
              x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 200],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: -Math.random() * duration
            }}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              background: isGold 
                ? 'radial-gradient(circle at 35% 35%, #fff9e6, #f8e4b1, #d4af37)' 
                : 'radial-gradient(circle at 35% 35%, #ffffff, #f1f1f1, #e0e0e0)',
              boxShadow: isGold 
                ? `0 0 ${size * 1.5}px rgba(212, 175, 55, 0.7)` 
                : `0 0 ${size * 1.5}px rgba(255, 255, 255, 0.5)`,
              filter: 'blur(0.3px)',
              willChange: "transform", // Performance hint
              transform: "translateZ(0)", // Force GPU
            }}
          />
        );
      })}
    </div>
  );
});

SectionBubbles.displayName = "SectionBubbles";
