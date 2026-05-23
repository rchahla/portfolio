"use client";

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

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
