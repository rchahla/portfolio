"use client";

import About from "@/components/About";
import Experince from "@/components/Experince";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <div
      className="bg-black text-white h-screen snap-y snap-proximity overflow-scroll  overflow-y-scroll overflow-x-hidden z-0 scrollbar 
    scrollbar-track-none scrollbar-thumb-[#F7AB0A]/80 "
    >
      <Head>
        <title>Riad's Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}

      <section id="hero" className="snap-start ">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-start">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-start ">
        <Experince />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
