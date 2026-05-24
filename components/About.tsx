import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -400,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="https://media.licdn.com/dms/image/v2/D4E03AQGRbp9k-ZysYw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718252449616?e=1781136000&v=beta&t=6FgpXp0oAdkoQtWA01IhHx_TFYZYDm_MOBUlGsal1T0"
      />
    </div>
  );
}
