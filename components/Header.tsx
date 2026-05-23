"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex sticky top-0 justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center">
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
        className="flex flex-row items-center space-x-3"
      >
        {/* Social Icons */}
        <SocialIcon url="https://www.linkedin.com/in/riad-chahla" />
        <SocialIcon url="https://github.com/rchahla" />
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
        className="flex flex-row items-center space-x-2 text-gray-400 cursor-pointer "
      >
        <SocialIcon
          className="cursor-pointer"
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
