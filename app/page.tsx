"use client";

import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-stone-950 text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar scrollbar-track-none scrollbar-thumb-[#F7AB0A]/80 ">
      <Head>
        <title>Riad's Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
