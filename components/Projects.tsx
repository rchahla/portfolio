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
  },
  {
    title: "AI Wedding Planner",
    client: "Personal Project",
    languages: ["React", "Node.js", "OpenAI API", "MongoDB"],
    description:
      "An AI-powered event planning application that generates personalized wedding itineraries, vendor suggestions, and budget breakdowns using the OpenAI API and a custom Node.js backend.",
    coverImage: "/images/Ai-wedding-cover.png",
  },
  {
    title: "Netflix Clone",
    client: "Personal Project",
    languages: ["React", "Firebase", "TMDB API", "CSS"],
    description:
      "A full-featured streaming UI clone with user authentication, dynamic movie and show listings sourced from the TMDB API, and a responsive design matching Netflix's visual aesthetic.",
    coverImage: "/images/Netflix-cover.jpg",
  },
  {
    title: "HealthCare Mobile App",
    client: "Personal Project",
    languages: ["React Native", "TypeScript", "Node.js", "PostgreSQL"],
    description:
      "A cross-platform mobile health application for tracking wellness metrics, booking appointments, and managing personal health records with a clean, accessible interface.",
    coverImage: "/images/CareCollect-Cover.png",
  },
  {
    title: "Squid Bank",
    client: "Personal Project",
    languages: ["React", "TypeScript", "Node.js", "MongoDB"],
    description:
      "A fintech web application simulating core banking features including account management, transaction history, and fund transfers, built with a modern dark-themed responsive interface.",
    coverImage: "/images/Squid_Bank_Cover.png",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="relative w-full flex flex-col items-center px-6 sm:px-16">
        <h3 className="pt-24 pb-10 uppercase tracking-[20px] text-2xl">
          Projects
        </h3>

        <div className="w-full max-w-301 mx-auto flex flex-wrap justify-center gap-7 pb-24">
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
