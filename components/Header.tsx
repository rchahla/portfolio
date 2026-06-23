"use client";

import React from "react";
import { motion } from "framer-motion";

type PlanetIconProps = {
  href?: string;
  label: string;
  lightColor: string;
  baseColor: string;
  darkColor: string;
  glowColor: string;
  children: React.ReactNode;
};

function PlanetIcon({
  href,
  label,
  lightColor,
  baseColor,
  darkColor,
  glowColor,
  children,
}: PlanetIconProps) {
  const sphere = (
    <div
      className="relative w-11 h-11 rounded-full flex items-center justify-center"
      style={{
        background: `radial-gradient(circle at 35% 30%, ${lightColor}, ${baseColor} 55%, ${darkColor})`,
        boxShadow: `inset -3px -3px 8px rgba(0,0,0,0.45), inset 1px 1px 4px rgba(255,255,255,0.12)`,
      }}
    >
      {/* shine highlight */}
      <span
        aria-hidden
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "10%",
          left: "18%",
          width: "36%",
          height: "25%",
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.45) 0%, transparent 70%)",
          filter: "blur(1.5px)",
        }}
      />
      <span className="relative z-10 flex items-center justify-center text-white w-5 h-5">
        {children}
      </span>
    </div>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <motion.a
        href={href}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
        aria-label={label}
        animate={{ filter: "drop-shadow(0 0 0px transparent)" }}
        whileHover={{
          scale: 1.25,
          filter: `drop-shadow(0 0 8px ${glowColor})`,
        }}
        transition={{ duration: 0.25 }}
        className="block cursor-pointer"
      >
        {sphere}
      </motion.a>
    );
  }

  return (
    <motion.div
      aria-label={label}
      role="button"
      animate={{ filter: "drop-shadow(0 0 0px transparent)" }}
      whileHover={{ scale: 1.25, filter: `drop-shadow(0 0 8px ${glowColor})` }}
      transition={{ duration: 0.25 }}
      className="block cursor-pointer"
    >
      {sphere}
    </motion.div>
  );
}

export default function Header() {
  return (
    <header className="bg-transparent flex sticky top-0 justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="hidden lg:flex flex-row items-center space-x-5"
      >
        <PlanetIcon
          href="https://www.linkedin.com/in/riad-chahla"
          label="LinkedIn"
          lightColor="#6eb5ff"
          baseColor="#0A66C2"
          darkColor="#053a78"
          glowColor="rgba(10,102,194,0.8)"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </PlanetIcon>

        <PlanetIcon
          href="https://github.com/rchahla"
          label="GitHub"
          lightColor="#6e7681"
          baseColor="#24292e"
          darkColor="#0a0c0d"
          glowColor="rgba(255,255,255,0.5)"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </PlanetIcon>
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="hidden lg:flex flex-row items-center space-x-2 text-gray-400"
      >
        <PlanetIcon
          href="#contact"
          label="Contact"
          lightColor="white"
          baseColor="black"
          darkColor="white"
          glowColor="rgba(247,171,10,0.7)"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
          >
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </PlanetIcon>
        <p className="uppercase hidden md:inline-flex text-sm text-gray-500">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
