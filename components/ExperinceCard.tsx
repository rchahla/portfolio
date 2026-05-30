import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperinceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg space-y-7 shrink-0 
      items-center bg-[#292929] opacity-40  
    group hover:scale-105 transition-transform hover:opacity-100 cursor-pointer overflow-hidden 
    w-[500px]  snap-center p-10 mt-10  "
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32  rounded-full bg-amber-50 flex items-center justify-center"
      >
        <img
          className="w-[70%] h-[70%] object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Bell_logo.svg"
          alt="Bell Logo"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Junior Data Analyst</h4>
        <p className="font-bold text-2xl mt-1">Bell Canada</p>
        <div className="flex space-x-2 my-2">
          <img
            src="https://devicon-website.vercel.app/api/javascript/original.svg"
            alt="JavaScript"
            className="w-10 h-10"
          />
          <img
            src="https://devicon-website.vercel.app/api/javascript/original.svg"
            alt="JavaScript"
            className="w-10 h-10"
          />
          <img
            src="https://devicon-website.vercel.app/api/javascript/original.svg"
            alt="JavaScript"
            className="w-10 h-10"
          />
        </div>
        <p className="uppercase py-5 opacity-80">Started.....</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperinceCard;
