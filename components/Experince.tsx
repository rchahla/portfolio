import React from "react";
import { motion } from "framer-motion";
import ExperinceCard from "./ExperinceCard";

type Props = {};

function Experince({}: Props) {
  return (
    <motion.div className="h-screen w-full flex flex-col items-center justify-center px-10 overflow-hidden">
      {/* Title ALWAYS above */}
      <h1 className="translate-y-14 w-50vw px-4 uppercase tracking-[15px] text-xl md:tracking-[20px] md:translate-y-10 md:text-2xl mb-10">
        Experience
      </h1>

      {/* Cards ONLY handle row behavior */}
      <div className="w-full flex flex-col md:flex-row space-x-10 overflow-x-scroll snap-x snap-mandatory xl:justify-center">
        <ExperinceCard />
        <ExperinceCard />
      </div>
    </motion.div>
  );
}

export default Experince;
