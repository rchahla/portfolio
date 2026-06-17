import Image from "next/image";
import type { Project } from "./ProjectModal";

type Props = {
  project: Project;
  onReadMore: () => void;
};

function ProjectCard({ project, onReadMore }: Props) {
  const visibleTags = project.languages.slice(0, 3);
  const overflow = project.languages.length - 3;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onReadMore}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onReadMore();
      }}
      aria-label={`View details for ${project.title}`}
      className="group relative rounded-2xl overflow-hidden cursor-pointer
        ring-1 ring-white/8
        hover:ring-[#F7AB0A]/40
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7AB0A]/70
        shadow-[0_2px_16px_rgba(0,0,0,0.5)]
        hover:shadow-[0_8px_48px_rgba(0,0,0,0.75),0_0_0_1px_rgba(247,171,10,0.12)]
        transition-all duration-300 ease-out"
    >
      {/* Locked 16:9 aspect ratio — every image fills this box identically */}
      <div
        className={`relative aspect-video overflow-hidden ${project.imageContain ? "bg-black" : ""}`}
      >
        {project.coverImage && (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className={`opacity-90 transition-transform duration-500 ease-out
              group-hover:scale-[1.08]
              ${project.imageContain ? "object-contain" : "object-cover"}`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}

        {/* Permanent gradient — keeps bottom text readable regardless of image */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"
        />

        {/* Hover scrim — darkens the image so revealed text pops */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/35
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300"
        />

        {/* Content pinned to card bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex flex-col gap-2.5">
          {/* Description — invisible at rest, slides up on hover */}
          <p
            className="text-white/75 text-xs sm:text-sm leading-relaxed line-clamp-3
            opacity-0 translate-y-3
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300 ease-out"
          >
            {project.description}
          </p>

          {/* Tech pills — same animation, slightly delayed */}
          <div
            className="flex flex-wrap gap-1.5
            opacity-0 translate-y-2
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300 ease-out delay-75"
          >
            {visibleTags.map((lang) => (
              <span
                key={lang}
                className="px-2.5 py-0.5 rounded-full text-[10px] font-medium
                  bg-white/10 backdrop-blur-sm border border-white/15 text-white/80"
              >
                {lang}
              </span>
            ))}
            {overflow > 0 && (
              <span
                className="px-2.5 py-0.5 rounded-full text-[10px] font-medium
                bg-white/10 backdrop-blur-sm border border-white/15 text-white/45"
              >
                +{overflow} more
              </span>
            )}
          </div>

          {/* Bottom bar — title/client always visible, CTA fades in on hover */}
          <div className="flex items-end justify-between gap-3">
            <div className="min-w-0 flex-1">
              <p className="text-[#F7AB0A]/65 text-[9px] sm:text-[10px] uppercase tracking-[2.5px] font-semibold mb-0.5 truncate">
                {project.client}
              </p>
              <h3 className="text-white font-bold text-sm sm:text-[15px] leading-tight truncate">
                {project.title}
              </h3>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onReadMore();
              }}
              aria-label={`View details for ${project.title}`}
              tabIndex={-1}
              className="shrink-0 px-3.5 py-1.5 rounded-full
                text-[10px] sm:text-[11px] uppercase tracking-[2px] font-bold whitespace-nowrap
                border border-[#F7AB0A]/55 text-[#F7AB0A]
                hover:bg-[#F7AB0A] hover:text-black hover:border-[#F7AB0A]
                opacity-0 scale-90
                group-hover:opacity-100 group-hover:scale-100
                transition-all duration-200 ease-out delay-75 cursor-pointer"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
