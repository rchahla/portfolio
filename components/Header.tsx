"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="bg-transparent flex sticky top-0 justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="hidden lg:flex flex-row items-center space-x-5"
      >
        {/* Social Icons */}
        <SocialIcon
          className="hover:scale-125 transition-transform rounded-full duration-300 hover:shadow-[0_0_20px_rgba(10,102,194,0.8)]"
          url="https://www.linkedin.com/in/riad-chahla"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          className="hover:scale-125 transition-transform rounded-full duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
          url="https://github.com/rchahla"
          target="_blank"
          rel="noopener noreferrer"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="hidden lg:flex flex-row items-center space-x-2 text-gray-400 cursor-pointer"
      >
        <SocialIcon
          className="rounded-full hover:scale-125 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.7)]"
          network="email"
          //   fgColor="gray"
          //   bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-500">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
