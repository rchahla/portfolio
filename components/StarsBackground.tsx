import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ShootingStar from "./ShootingStar";

export default function StarsBackground() {
  const [stars, setStars] = useState<
    { size: number; x: number; y: number; opacity: number }[]
  >([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 80 }).map(() => ({
      size: Math.random() * 3 + 1.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.4,
    }));

    setStars(generatedStars);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}
      className="absolute inset-0 overflow-hidden "
    >
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            boxShadow: "0 0 8px rgba(255,255,255,0.8)",
          }}
        />
      ))}

      {/* shooting stars */}
      {/* {Array.from({ length: 3 }).map((_, i) => (
        <ShootingStar key={i} delay={i * 2} />
      ))} */}
    </motion.div>
  );
}
