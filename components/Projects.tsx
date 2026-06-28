import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal, { type Project } from "./ProjectModal";

const PROJECTS: Project[] = [
  {
    title: "RBC Sponsored Project",
    client: "Royal Bank of Canada",
    languages: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Groq API",
      "Google Gemini",
    ],
    description:
      "An AI-powered chatbot built for Royal Bank of Canada that helps commercial real estate owners navigate green building certifications (LEED, WELL, BOMA BEST). Users can ask natural language questions, upload building documents, and receive cited, sourced answers about certification requirements and ROI. The backend (Node.js/Express) uses a multi-role LLM pipeline via the Groq API — with separate models for planning, research, writing, and verification — backed by PostgreSQL with vector embeddings for semantic document retrieval. Built as a 5-person capstone team project (SE 4450).",
    coverImage: "/images/RBC-Bank-Cover.jpg",
    videoUrl: "/videos/Green3.mp4",
  },

  {
    title: "AI Wedding Planner",
    client: "Personal Project",
    languages: [
      "Python",
      "Flask",
      "RAG",
      "Google Gemini API",
      "OpenWeatherMap",
      "SendGrid",
    ],
    description:
      "A full-stack AI planning assistant that takes wedding details (guest count, budget, theme, venue type) and generates a personalized planning report. It uses a RAG pipeline to surface conflicts and risks, integrates live weather data for outdoor venues, and emails the report via SendGrid. Built with Flask, Google Gemini, and a conversational follow-up chat interface.",
    coverImage: "/images/Ai-wedding-cover.jpg",
    videoUrl: "/videos/WeddingPlannerDemo.mp4",
  },

  {
    title: "Netflix Clone",
    client: "Personal Project",
    languages: ["React", "Firebase", "Express", "Node.js", "CSS"],
    description:
      "A full-stack streaming platform replica built with React, Redux, Firebase, and Stripe. Features user authentication, real movie data via the TMDB API, subscription plan selection with live Stripe payments, and a gated home screen that mirrors Netflix's browse experience.",
    coverImage: "/images/Netflix-cover.jpg",
    imageContain: true,
    videoUrl: "/videos/NetflixDemo.mp4",
  },

  {
    title: "HealthCare Mobile App",
    client: "Personal Project",
    languages: [
      "React Native",
      "Node.js/Express",
      "PostgreSQL",
      "Google Cloud",
    ],
    description:
      "A full-stack React Native (Expo) mobile application serving both patients and healthcare providers. Features a suite of visual eye exams (Amsler grid, color blindness, visual acuity, Pelli-Robson contrast sensitivity, and facial recognition), symptom collection with multi-language support, patient dashboards, and secure JWT-based authentication.",
    coverImage: "/images/CareCollect-Cover.jpg",
    videoUrl: "https://youtu.be/kZ9usK8K6DM?si=ZKKMlbUaGhwTRjTR",
  },
  {
    title: "Personal Portfolio",
    client: "Personal Project",
    languages: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "Framer Motion",
    ],
    description:
      "This portfolio — a dark-theme SPA built with Next.js, React Three Fiber, and Framer Motion. Features an interactive 3D scene, animated skill rings, and a fully responsive layout across all screen sizes.",
    coverImage: "/images/Portfolio-Cover.png",
    demoImage: "/images/Portfolio-Cover.png",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="relative w-full flex flex-col items-center px-6 sm:px-12 lg:px-16">
        {/* Section header */}
        <div className="pt-24 pb-12 flex flex-col items-center gap-4">
          <h3 className="uppercase tracking-[20px] text-2xl text-white">
            Projects
          </h3>
          <div className="w-20 h-px bg-linear-to-r from-transparent via-[#F7AB0A]/55 to-transparent" />
        </div>

        {/* Responsive card grid — 1 col → 2 col → 3 col */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pb-24">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onReadMore={() => setSelectedProject(project)}
            />
          ))}

          {/* Currently Building card — no modal */}
          <div className="relative rounded-2xl overflow-hidden ring-1 ring-[#F7AB0A]/20 shadow-[0_2px_16px_rgba(0,0,0,0.5)]">
            <div className="relative aspect-video overflow-hidden bg-[#0b0b0b] flex flex-col items-center justify-center gap-4 px-6 text-center">
              {/* subtle radial glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(247,171,10,0.07)_0%,transparent_70%)]"
              />

              {/* live pulse indicator */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F7AB0A] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F7AB0A]" />
                </span>
                <span className="text-[9px] uppercase tracking-[3px] text-[#F7AB0A]/70 font-semibold">
                  Currently Building
                </span>
              </div>

              <h3 className="text-white font-bold text-lg sm:text-xl leading-snug">
                AI Agents
              </h3>

              <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-xs">
                Building autonomous AI agents that actually work — capable of
                reasoning, planning, and executing multi-step tasks end-to-end.
              </p>

              {/* tech tags */}
              <div className="flex flex-wrap justify-center gap-1.5">
                {["Python", "Claude API", "LangChain", "MCP"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-medium
                      bg-white/6 border border-white/10 text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preload local videos in the background */}
      <div className="hidden" aria-hidden="true">
        {PROJECTS.filter(
          (p) => p.videoUrl && !/youtube\.com|youtu\.be|vimeo\.com/.test(p.videoUrl)
        ).map((p) => (
          <video key={p.videoUrl} src={p.videoUrl} preload="auto" muted />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default Projects;
