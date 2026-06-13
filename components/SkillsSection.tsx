import React, { useRef, useEffect } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";

// ── Types ─────────────────────────────────────────────────────────────────────

type Skill = {
  name: string;
  icon: string;
  percentage: number;
};

type SkillCategory = {
  id: string;
  title: string;
  description: string;
  color: string;
  glowRgb: string;
  skills: Skill[];
};

// ── Data ──────────────────────────────────────────────────────────────────────

const di = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    description: "Core languages I write in daily",
    color: "#F7AB0A",
    glowRgb: "247, 171, 10",
    skills: [
      { name: "Python",     icon: di("python"),     percentage: 90 },
      { name: "JavaScript", icon: di("javascript"), percentage: 85 },
      { name: "TypeScript", icon: di("typescript"), percentage: 80 },
      { name: "SQL",        icon: di("postgresql"), percentage: 75 },
      { name: "R",          icon: di("r"),          percentage: 65 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "UI frameworks and styling tools",
    color: "#60A5FA",
    glowRgb: "96, 165, 250",
    skills: [
      { name: "React",        icon: di("react"),           percentage: 85 },
      { name: "Next.js",      icon: di("nextjs", "plain"), percentage: 80 },
      { name: "Tailwind CSS", icon: di("tailwindcss"),     percentage: 85 },
      { name: "HTML",         icon: di("html5"),           percentage: 90 },
      { name: "CSS",          icon: di("css3"),            percentage: 85 },
    ],
  },
  {
    id: "data",
    title: "Data & Analytics",
    description: "Data science and ML libraries",
    color: "#34D399",
    glowRgb: "52, 211, 153",
    skills: [
      { name: "Pandas",       icon: di("pandas"),      percentage: 80 },
      { name: "NumPy",        icon: di("numpy"),       percentage: 75 },
      { name: "scikit-learn", icon: di("scikitlearn"), percentage: 70 },
      { name: "TensorFlow",   icon: di("tensorflow"),  percentage: 60 },
      { name: "Jupyter",      icon: di("jupyter"),     percentage: 85 },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    description: "Development and deployment tools",
    color: "#C084FC",
    glowRgb: "192, 132, 252",
    skills: [
      { name: "Git",     icon: di("git"),    percentage: 90 },
      { name: "Docker",  icon: di("docker"), percentage: 70 },
      { name: "Linux",   icon: di("linux"),  percentage: 75 },
      { name: "Azure",   icon: di("azure"),  percentage: 65 },
      { name: "VS Code", icon: di("vscode"), percentage: 95 },
    ],
  },
];

// ── CircleProgress ────────────────────────────────────────────────────────────

const RADIUS = 38;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function levelLabel(pct: number): string {
  if (pct >= 85) return "Expert";
  if (pct >= 70) return "Advanced";
  if (pct >= 50) return "Intermediate";
  return "Beginner";
}

type CircleProgressProps = {
  skill: Skill;
  color: string;
  glowRgb: string;
  delay: number;
};

function CircleProgress({ skill, color, glowRgb, delay }: CircleProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const targetOffset = CIRCUMFERENCE * (1 - skill.percentage / 100);

  const strokeOffset = useMotionValue(CIRCUMFERENCE);
  const countValue   = useMotionValue(0);

  const countRounded = useTransform(countValue, (v) => Math.round(v));
  const displayText  = useMotionTemplate`${countRounded}%`;

  useEffect(() => {
    if (!isInView) return;
    const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
    const c1 = animate(strokeOffset, targetOffset,     { duration: 1.5, delay, ease });
    const c2 = animate(countValue,   skill.percentage, { duration: 1.5, delay, ease });
    return () => { c1.stop(); c2.stop(); };
  }, [isInView, strokeOffset, countValue, targetOffset, skill.percentage, delay]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2.5">
      <div className="relative">
        <svg
          viewBox="0 0 100 100"
          className="w-20 h-20 sm:w-24 sm:h-24"
          aria-hidden="true"
        >
          <circle
            cx="50" cy="50" r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="6"
          />
          <g transform="rotate(-90 50 50)">
            <motion.circle
              cx="50" cy="50" r={RADIUS}
              fill="none"
              stroke={color}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              style={{
                strokeDashoffset: strokeOffset,
                filter: `drop-shadow(0 0 5px rgba(${glowRgb}, 0.6))`,
              }}
            />
          </g>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
          <img
            src={skill.icon}
            alt=""
            aria-hidden="true"
            className="w-4.25 h-4.25 sm:w-5 sm:h-5 object-contain"
            loading="lazy"
          />
          <motion.span
            className="text-[11px] sm:text-xs font-bold tabular-nums leading-none"
            style={{ color }}
          >
            {displayText}
          </motion.span>
        </div>
      </div>

      <div className="text-center w-20 sm:w-24">
        <p className="text-[11px] sm:text-xs text-white/70 font-medium leading-tight truncate">
          {skill.name}
        </p>
        <p
          className="text-[9px] sm:text-[10px] font-semibold mt-0.5 leading-none uppercase tracking-wide"
          style={{ color: `rgba(${glowRgb}, 0.7)` }}
        >
          {levelLabel(skill.percentage)}
        </p>
      </div>
    </div>
  );
}

// ── SkillsSection ─────────────────────────────────────────────────────────────

export default function SkillsSection() {
  return (
    <div className="w-full max-w-6xl">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[#F7AB0A] uppercase tracking-[6px] text-[11px] font-semibold mb-10"
      >
        Technical Skills
      </motion.p>

      <div className="space-y-12 pb-16">
        {SKILL_CATEGORIES.map((cat, catIndex) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: catIndex * 0.08 }}
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-7">
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: cat.color }}
              />
              <h3 className="text-[11px] font-semibold text-white/75 uppercase tracking-[4px] shrink-0">
                {cat.title}
              </h3>
              <div
                className="flex-1 h-px"
                style={{
                  background: `linear-gradient(to right, rgba(255,255,255,0.07), transparent)`,
                }}
              />
              <span className="hidden sm:block text-[10px] text-white/28 shrink-0 italic">
                {cat.description}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6">
              {cat.skills.map((skill, skillIndex) => (
                <CircleProgress
                  key={skill.name}
                  skill={skill}
                  color={cat.color}
                  glowRgb={cat.glowRgb}
                  delay={catIndex * 0.1 + skillIndex * 0.07}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
