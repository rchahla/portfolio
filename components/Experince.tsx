import { motion } from "framer-motion";
import ExperinceCard, { type Experience } from "./ExperinceCard";

// ── Data ──────────────────────────────────────────────────────────────────────

const di = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

const EXPERIENCES: Experience[] = [
  {
    role: "Junior Data Analyst",
    company: "Bell Canada",
    dates: "Jun 2024 – Dec 2024",
    logoSrc: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bell_logo.svg",
    logoAlt: "Bell Canada",
    logoBg: "#ffffff",
    tech: [
      { src: di("postgresql"), alt: "SQL / PostgreSQL" },
      { src: di("python"),     alt: "Python" },
      { src: di("azure"),      alt: "Azure" },
    ],
    bullets: [
      "Queried large operational databases with SQL to resolve client escalations and deliver targeted analytical reports",
      "Authored onboarding documentation for team workflows and best practices, accelerating new-hire productivity",
      "Onboarded independently to a new team mid-internship and delivered meaningful contributions within the first few weeks",
      "Participated in cross-functional stakeholder meetings to surface blockers and keep multi-team projects aligned",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Western University",
    dates: "May 2024 – Aug 2024",
    logoAlt: "Western University",
    logoBg: "#4F2D7F",
    logoInitials: "W",
    tech: [
      { src: di("html5"),      alt: "HTML5" },
      { src: di("css3"),       alt: "CSS3" },
      { src: di("javascript"), alt: "JavaScript" },
      { src: di("bootstrap"),  alt: "Bootstrap" },
      { src: di("git"),        alt: "Git" },
    ],
    bullets: [
      "Built responsive UI components for an Italian cultural exhibition website using HTML, CSS, JavaScript, and Bootstrap",
      "Managed version control in a team environment with Git and GitHub — coordinating branches and resolving merge conflicts",
      "Contributed across the full project lifecycle, from design implementation to delivery, within a collaborative development team",
    ],
  },
];

const EDUCATION: Experience[] = [
  {
    role: "Bachelor of Science — Computer Science",
    company: "University of Western Ontario",
    dates: "Sep 2021 – Apr 2025",
    logoAlt: "Western University",
    logoBg: "#4F2D7F",
    logoInitials: "W",
    bullets: [
      "Dean's Honour List recipient",
      "Placeholder: relevant coursework, specializations, or academic achievements",
      "Placeholder: notable project, thesis, or capstone description",
    ],
  },
  {
    role: "Ontario Secondary School Diploma",
    company: "Placeholder High School",
    dates: "Sep 2017 – Jun 2021",
    logoAlt: "High School",
    logoBg: "#1e3a5f",
    logoInitials: "HS",
    bullets: [
      "Placeholder: academic honours or awards received",
      "Placeholder: extracurricular activities or leadership roles",
    ],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Experince() {
  return (
    <div className="w-full px-6 sm:px-10 pt-24 pb-24">
      <motion.h1
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center uppercase tracking-[12px] md:tracking-[18px] text-xl md:text-2xl mb-16"
      >
        Experience &amp; Education
      </motion.h1>

      <div className="max-w-4xl mx-auto">

        {/* ── PROFESSIONAL EXPERIENCE ──────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-[#F7AB0A] uppercase tracking-[6px] text-[11px] font-semibold mb-8"
        >
          Professional Experience
        </motion.p>

        <div className="relative max-w-2xl mb-16">
          <div className="absolute left-5 top-3 bottom-0 w-px bg-linear-to-b from-[#F7AB0A]/80 via-[#F7AB0A]/25 to-transparent" />
          <div className="flex flex-col">
            {EXPERIENCES.map((experience, index) => (
              <ExperinceCard
                key={experience.company}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* ── DIVIDER ───────────────────────────────────────────────── */}
        <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-16" />

        {/* ── EDUCATION ─────────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#F7AB0A] uppercase tracking-[6px] text-[11px] font-semibold mb-8"
        >
          Education
        </motion.p>

        <div className="relative max-w-2xl">
          <div className="absolute left-5 top-3 bottom-0 w-px bg-linear-to-b from-[#F7AB0A]/80 via-[#F7AB0A]/25 to-transparent" />
          <div className="flex flex-col">
            {EDUCATION.map((entry, index) => (
              <ExperinceCard
                key={entry.company}
                experience={entry}
                index={index}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
