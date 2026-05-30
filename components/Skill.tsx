import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div
      className="group relative flex cursor-pointer hover:scale-110 transform 
    transition duration-500"
    >
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
        className="rounded-full border p-1 border-gray-500 object-cover 
        w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div
        className="opacity-0 absolute  group-hover:opacity-80 
      transition duration-300 ease-in-out group-hover:bg-white 
      w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black  opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
