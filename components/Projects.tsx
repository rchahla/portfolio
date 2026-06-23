import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal, { type Project } from "./ProjectModal";

const PROJECTS: Project[] = [
  {
    title: "RBC Sponsored Project",
    client: "Royal Bank of Canada",
    languages: ["Python", "Pandas", "scikit-learn", "SQL"],
    description:
      "A data analytics initiative sponsored by RBC focused on predictive modeling and financial data pipelines. Built as part of a collaborative academic partnership with the university.",
    coverImage: "/images/RBC-Bank-Cover.jpg",
    videoUrl: "/videos/Green3.mp4",
  },
  {
    title: "AI Wedding Planner",
    client: "Personal Project",
    languages: ["React", "Node.js", "OpenAI API", "MongoDB"],
    description:
      "An AI-powered event planning application that generates personalized wedding itineraries, vendor suggestions, and budget breakdowns using the OpenAI API and a custom Node.js backend.",
    coverImage: "/images/Ai-wedding-cover.jpg",
    videoUrl: "/videos/WeddingPlannerDemo.mp4",
  },

  {
    title: "Netflix Clone",
    client: "Personal Project",
    languages: ["React", "Firebase", "TMDB API", "CSS"],
    description:
      "A full-featured streaming UI clone with user authentication, dynamic movie and show listings sourced from the TMDB API, and a responsive design matching Netflix's visual aesthetic.",
    coverImage: "/images/Netflix-cover.jpg",
    imageContain: true,
    videoUrl: "/videos/NetflixDemo.mp4",
  },

  {
    title: "HealthCare Mobile App",
    client: "Personal Project",
    languages: ["React Native", "TypeScript", "Node.js", "PostgreSQL"],
    description:
      "A cross-platform mobile health application for tracking wellness metrics, booking appointments, and managing personal health records with a clean, accessible interface.",
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
      "This portfolio — a dark-theme SPA built with Next.js, React Three Fiber, and Framer Motion. Features interactive 3D scenes, animated skill rings, and a fully responsive layout across all screen sizes.",
    coverImage: "/images/Portfolio-Cover.png",
    demoImage: "/images/Portfolio-Cover.png",
  },

  {
    title: "Squid Bank",
    client: "Personal Project",
    languages: ["React", "TypeScript", "Node.js", "MongoDB"],
    description:
      "A fintech web application simulating core banking features including account management, transaction history, and fund transfers, built with a modern dark-themed responsive interface.",
    coverImage: "/images/Squid_Bank_Cover2.png",
    demoImage: "/images/Squid_Bank_Demo_Image.png",
    demoImageNatural: true,
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
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default Projects;
