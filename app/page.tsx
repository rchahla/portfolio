"use client";

import About from "@/components/About";
import Experince from "@/components/Experince";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div
      className="bg-black text-white h-screen snap-y snap-proximity  overflow-y-hidden overflow-x-hidden z-0 scrollbar 
    scrollbar-track-none scrollbar-thumb-[#F7AB0A]/80 "
    >
      <Head>
        <title>Riad's Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}

      <section id="hero" className="snap-start min-h-screen">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-start min-h-screen">
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
