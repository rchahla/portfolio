"use client";

import { useState, useEffect } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experince from "@/components/Experince";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stars from "@/components/Stars";
import SectionNav from "@/components/SectionNav";
import Head from "next/head";

const SECTION_IDS = [
  "hero",
  "about",
  "experience",
  "projects",
  "contact",
] as const;

type SectionId = (typeof SECTION_IDS)[number];

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  // Keep Hero's existing <Link href="#about"> buttons working via hash changes.
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "") as SectionId;
      if ((SECTION_IDS as readonly string[]).includes(hash)) {
        setActiveSection(hash);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const navigateTo = (id: SectionId) => {
    setActiveSection(id);
    window.location.hash = id;
  };

  // Sections are always mounted so Three.js canvases (EarthCanvas, Stars)
  // are never destroyed and reloaded between visits.
  const sections: { id: SectionId; content: React.ReactNode }[] = [
    {
      id: "hero",
      content: (
        <>
          <Hero />
          <Stars />
        </>
      ),
    },
    {
      id: "about",
      content: (
        <>
          <About isActive={activeSection === "about"} /> <Stars />{" "}
        </>
      ),
    },
    {
      id: "experience",
      content: (
        <>
          <Experince /> <Stars />{" "}
        </>
      ),
    },
    {
      id: "projects",
      content: (
        <>
          <Projects /> <Stars />{" "}
        </>
      ),
    },
    {
      id: "contact",
      content: (
        <>
          <Contact />
          <Stars />
        </>
      ),
    },
  ];

  return (
    // Full-screen, no-scroll root — all navigation is handled by state.
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <Head>
        <title>Riad's Portfolio</title>
      </Head>

      {/* Header pinned at the top above all sections */}
      <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none ">
        <div className="pointer-events-auto">
          <Header />
        </div>
      </div>

      {/* Sections — all in the DOM, only the active one is visible.
          Each section is a full-screen layer with its own internal scroll. */}
      {sections.map(({ id, content }) => (
        <section
          key={id}
          id={id}
          className={`
            absolute inset-0 overflow-y-auto
            scrollbar scrollbar-track-none scrollbar-thumb-[#F7AB0A]/80
            transition-opacity duration-500 ease-in-out
            ${
              activeSection === id
                ? "opacity-100 pointer-events-auto z-10"
                : "opacity-0 pointer-events-none z-0"
            }
          `}
        >
          {content}
        </section>
      ))}

      {/* Right-side section navigation */}
      <SectionNav active={activeSection} onNavigate={navigateTo} />
    </div>
  );
}
