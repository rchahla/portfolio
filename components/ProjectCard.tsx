import React from "react";
import Image from "next/image";
import type { Project } from "./ProjectModal";

type Props = {
  project: Project;
  onReadMore: () => void;
};

function ProjectCard({ project, onReadMore }: Props) {
  return (
    <div
      className="w-70 h-90 flex flex-col p-5
        bg-black   text-white
        shadow-[0_4px_24px_rgba(0,0,0,0.5)]
        hover:-translate-y-1.5 hover:border-[#F7AB0A]/25
        hover:shadow-[0_8px_32px_rgba(0,0,0,0.65)]
        transition-all duration-300 ease-in-out"
    >
      {project.coverImage && (
        <div className="relative shadow-[2px_4px_24px_rgba)] w-full h-60 rounded-lg overflow-hidden mb-3">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-contain"
            sizes="280px"
          />
        </div>
      )}

      <h3 className="font-semibold text-xl leading-snug mb-3">
        {project.title}
      </h3>

      {/* <p className="text-sm text-gray-400 leading-relaxed line-clamp-5 flex-1 overflow-hidden">
        {project.description}
      </p> */}

      <button
        onClick={onReadMore}
        className="mt-4 self-start text-xs uppercase tracking-[3px] font-semibold
          border border-[#F7AB0A]/40 text-[#F7AB0A] rounded-full px-4 py-2
          hover:bg-[#F7AB0A] hover:text-black hover:border-[#F7AB0A]
          transition-all duration-200 cursor-pointer"
      >
        Read More
      </button>
    </div>
  );
}

export default ProjectCard;
