import { motion } from "framer-motion";
import { useMemo } from "react";

export default function ShootingStar({ delay }: { delay: number }) {
  const { startY, startX } = useMemo(() => {
    return {
      startY: Math.random() * window.innerHeight * 0.4,
      startX: -100,
    };
  }, []);

  return (
    <motion.div
      className="absolute h-[2px] w-32 bg-gradient-to-r from-white via-blue-200 to-transparent rotate-[-25deg] rounded-full"
      initial={{
        x: startX,
        y: startY,
        opacity: 0,
      }}
      animate={{
        x: window.innerWidth + 200,
        y: startY + 300,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        repeatDelay: 4 + delay,
        ease: "easeOut",
      }}
      style={{
        boxShadow: "0 0 12px rgba(255,255,255,0.8)",
      }}
    />
  );
}
