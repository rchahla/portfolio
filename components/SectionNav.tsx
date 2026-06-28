"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience & Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof navItems)[number]["id"];

type Props = {
  active: string;
  onNavigate: (id: SectionId) => void;
};

export default function SectionNav({ active, onNavigate }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const hintTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem("navHintSeen")) return;

    const cycle = (initialDelay: number) => {
      hintTimers.current.push(
        setTimeout(() => {
          setShowHint(true);
          hintTimers.current.push(
            setTimeout(() => {
              setShowHint(false);
              cycle(6000);
            }, 4000),
          );
        }, initialDelay),
      );
    };

    cycle(1200);
    return () => hintTimers.current.forEach(clearTimeout);
  }, []);

  const dismissHint = () => {
    hintTimers.current.forEach(clearTimeout);
    hintTimers.current = [];
    setShowHint(false);
    localStorage.setItem("navHintSeen", "1");
  };

  const handleNavigate = (id: SectionId) => {
    onNavigate(id);
    setMenuOpen(false);
    dismissHint();
  };

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Auto-close if the viewport grows past the mobile breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ── NAV HINT (desktop only, first visit only) ───────────────── */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            key="nav-hint"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="hidden lg:flex fixed right-24 top-[calc(50%-2.8rem)] -translate-y-1/2 z-50 items-center gap-2 pointer-events-none"
          >
            <div className="flex flex-col items-end gap-1">
              <span className="text-[11px] uppercase tracking-[2.5px] font-semibold text-white/70 whitespace-nowrap">
                Navigate pages
              </span>
              <div className="w-full h-px bg-gradient-to-l from-[#F7AB0A]/50 to-transparent" />
            </div>
            {/* arrow pointing right toward the dots */}
            <svg
              viewBox="0 0 16 16"
              className="w-3.5 h-3.5 fill-[#F7AB0A]/60 shrink-0"
              aria-hidden="true"
            >
              <path d="M8.293 1.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L12.586 9H1a1 1 0 0 1 0-2h11.586L8.293 2.707a1 1 0 0 1 0-1.414z" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── DESKTOP NAV (≥ 1024px) ───────────────────────────────────
          Unchanged from before — right-side vertical dot nav.         */}
      <nav className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-7 pr-14">
        {navItems.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleNavigate(id)}
            aria-label={`Go to ${label}`}
            className="group flex items-center justify-end cursor-pointer"
          >
            <span
              className="
                overflow-hidden whitespace-nowrap text-sm font-medium text-white
                max-w-0 group-hover:max-w-50
                mr-0 group-hover:mr-3
                opacity-0 group-hover:opacity-100
                transition-all duration-300 ease-in-out
              "
            >
              {label}
            </span>
            <div
              className={`rounded-full flex-shrink-0 transition-all duration-300 ease-in-out ${
                active === id
                  ? "w-4 h-4 bg-[#F7AB0A] shadow-[0_0_10px_rgba(247,171,10,0.65)]"
                  : "w-2.5 h-2.5 bg-gray-500 group-hover:bg-white"
              }`}
            />
          </button>
        ))}
      </nav>

      {/* ── MOBILE NAV (< 1024px) ────────────────────────────────────
          Hamburger button + slide-out panel + dim backdrop.           */}

      {/* Hamburger button — sits in the top-right corner, above the
          header wrapper (z-50 > header z-40). Invisible on desktop.  */}
      <button
        onClick={() => setMenuOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
        className="lg:hidden fixed top-5 right-5 z-50 w-10 h-10 flex flex-col justify-center items-center gap-[5px] cursor-pointer rounded-md hover:bg-white/10 transition-colors duration-200"
      >
        <span className="block w-5 h-[2px] bg-white rounded-full" />
        <span className="block w-5 h-[2px] bg-white rounded-full" />
        <span className="block w-5 h-[2px] bg-white rounded-full" />
      </button>

      {/* Dim backdrop — click anywhere outside the panel to close.
          z-[55] sits above the hamburger (z-50) so taps go to the
          backdrop's onClick, not the button underneath.              */}
      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={`lg:hidden fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-out panel — transforms from left.
          z-[60] keeps it in front of the backdrop.                   */}
      <aside
        className={`lg:hidden fixed inset-y-0 left-0 w-72 z-[60]
          bg-[#0d0d0d]/95 backdrop-blur-xl border-r border-white/10
          flex flex-col pt-6 pb-10
          transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}
        `}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 pb-6 border-b border-white/10">
          <span className="text-white/60 text-xs uppercase tracking-widest font-semibold">
            Navigation
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors duration-200 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col gap-1 mt-4 px-4">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNavigate(id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                active === id
                  ? "bg-[#F7AB0A]/15 text-[#F7AB0A] border border-[#F7AB0A]/25"
                  : "text-gray-400 hover:text-white hover:bg-white/8"
              }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`flex-shrink-0 w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                    active === id ? "bg-[#F7AB0A]" : "bg-gray-600"
                  }`}
                />
                {label}
              </span>
            </button>
          ))}
        </nav>

        {/* Social links — pushed to the drawer bottom via mt-auto */}
        <div className="mt-auto px-6 pt-5 border-t border-white/10">
          <span className="text-[10px] uppercase tracking-[4px] text-white/30 font-semibold block mb-4">
            Connect
          </span>
          <div className="flex items-center gap-3">
            <SocialIcon
              url="https://www.linkedin.com/in/riad-chahla"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: 36, height: 36 }}
              className="hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer"
            />
            <SocialIcon
              url="https://github.com/rchahla"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: 36, height: 36 }}
              className="hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer"
            />
            <SocialIcon
              network="email"
              style={{ width: 36, height: 36 }}
              className="hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer"
            />
          </div>
        </div>
      </aside>
    </>
  );
}
