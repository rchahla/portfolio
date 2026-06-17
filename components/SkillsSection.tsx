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
  icon?: string;
  percentage: number;
  filter?: string;
  iconClassName?: string;
  percentageClass?: string; // Tailwind top-[X%] to position percentage independently of icon
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
    description: "Core languages I write in",
    color: "#F7AB0A",
    glowRgb: "247, 171, 10",
    skills: [
      { name: "JavaScript", icon: di("javascript"), percentage: 90 },
      { name: "HTML", icon: di("html5"), percentage: 88 },
      { name: "CSS", icon: di("css3"), percentage: 82 },
      { name: "Python", icon: di("python"), percentage: 75 },
      { name: "SQL", icon: di("postgresql"), percentage: 72 },
      { name: "Java", icon: di("java"), percentage: 65 },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Runtime",
    description: "Libraries, runtimes, and API design",
    color: "#60A5FA",
    glowRgb: "96, 165, 250",
    skills: [
      { name: "React", icon: di("react"), percentage: 85 },
      { name: "Node.js", icon: di("nodejs"), percentage: 80 },
      {
        name: "Next.js",
        icon: di("nextjs", "plain"),
        percentage: 78,
        filter: "invert(1)",
      },
      {
        name: "Express",
        icon: di("express", "original"),
        percentage: 70,
        filter: "invert(1)",
      },
      { name: "RESTful APIs", icon: di("postman"), percentage: 78 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Infrastructure and deployment",
    color: "#34D399",
    glowRgb: "52, 211, 153",
    skills: [
      { name: "Docker", icon: di("docker"), percentage: 65 },
      { name: "GCP", icon: di("googlecloud"), percentage: 62 },
      {
        name: "AWS",
        icon: di("amazonwebservices", "original-wordmark"),
        percentage: 58,
      },
      { name: "Kubernetes", icon: di("kubernetes"), percentage: 52 },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Storage and data management",
    color: "#F472B6",
    glowRgb: "244, 114, 182",
    skills: [
      { name: "PostgreSQL", icon: di("postgresql"), percentage: 75 },
      { name: "Firebase", icon: di("firebase"), percentage: 68 },
      {
        name: "SQL Server",
        icon: di("microsoftsqlserver", "plain"),
        percentage: 62,
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    description: "Dev environment and process",
    color: "#C084FC",
    glowRgb: "192, 132, 252",
    skills: [
      { name: "VS Code", icon: di("vscode"), percentage: 92 },
      {
        name: "GitHub",
        icon: di("github"),
        percentage: 88,
        filter: "invert(1)",
      },
      { name: "IntelliJ", icon: di("intellij", "plain"), percentage: 72 },
      { name: "Agile", icon: di("jira"), percentage: 75 },
    ],
  },
  {
    id: "ai",
    title: "AI Tools",
    description: "AI-assisted development",
    color: "#22D3EE",
    glowRgb: "34, 211, 238",
    skills: [
      {
        name: "Claude Code",
        icon: "https://cdn.simpleicons.org/claude/f97316",
        percentage: 88,
        percentageClass: "top-[65%]",
      },
      {
        name: "ChatGPT",
        icon: "https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png",
        percentage: 85,
        filter: "invert(1)",
        iconClassName: "w-7 h-7 sm:w-10 sm:h-10 object-contain",
        percentageClass: "top-[65%]",
      },
      {
        name: "Copilot",
        icon: "https://cdn.simpleicons.org/githubcopilot/ffffff",
        percentage: 80,
      },
      {
        name: "Gemini",
        icon: "https://cdn.simpleicons.org/googlegemini/ffffff",
        percentage: 75,
      },
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
  const countValue = useMotionValue(0);

  const countRounded = useTransform(countValue, (v) => Math.round(v));
  const displayText = useMotionTemplate`${countRounded}%`;

  useEffect(() => {
    if (!isInView) return;
    const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
    const c1 = animate(strokeOffset, targetOffset, {
      duration: 1.5,
      delay,
      ease,
    });
    const c2 = animate(countValue, skill.percentage, {
      duration: 1.5,
      delay,
      ease,
    });
    return () => {
      c1.stop();
      c2.stop();
    };
  }, [
    isInView,
    strokeOffset,
    countValue,
    targetOffset,
    skill.percentage,
    delay,
  ]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2.5">
      <div className="relative">
        <svg
          viewBox="0 0 100 100"
          className="w-20 h-20 sm:w-24 sm:h-24"
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="6"
          />
          <g transform="rotate(-90 50 50)">
            <motion.circle
              cx="50"
              cy="50"
              r={RADIUS}
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

        <div className="absolute inset-0">
          {/* Icon: always perfectly centred in the ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            {skill.icon && (
              <img
                src={skill.icon}
                alt=""
                aria-hidden="true"
                className={skill.iconClassName ?? "w-5 h-5 object-contain"}
                loading="lazy"
                style={skill.filter ? { filter: skill.filter } : undefined}
              />
            )}
          </div>
          {/* Percentage: independent top position so it never affects the icon */}
          <motion.span
            className={`absolute left-0 right-0 text-center text-[11px] sm:text-xs font-bold tabular-nums leading-none ${skill.percentageClass ?? "top-[64%]"}`}
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
