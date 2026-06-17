import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export type Project = {
  title: string;
  client: string;
  languages: string[];
  preview?: string;
  description: string;
  videoUrl?: string;
  coverImage?: string;
  imageContain?: boolean;
};

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-80 bg-black/75 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Centering wrapper — click outside the box closes the modal */}
          <motion.div
            key="modal-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-80 flex items-center justify-center p-4 sm:p-8"
            onClick={onClose}
          >
            {/* Modal box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto
                bg-[#111] border border-white/10 rounded-2xl
                scrollbar scrollbar-track-none scrollbar-thumb-[#F7AB0A]/60"
            >
              {/* Sticky header: title + close button */}
              <div className="sticky top-0 z-10 bg-[#111] border-b border-white/8 px-6 sm:px-8 py-5">
                <div className="relative flex items-center justify-center">
                  <h2
                    id="modal-title"
                    className="text-xl sm:text-2xl font-bold text-white text-center px-10 leading-snug"
                  >
                    {project.title}
                  </h2>
                  <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute right-0 w-8 h-8 flex items-center justify-center
                      rounded-full bg-white/10 hover:bg-white/20
                      text-white text-sm transition-colors duration-200 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 sm:px-8 py-7">
                {/* Info section */}
                <div className="space-y-5">
                  <InfoRow label="Project" value={project.title} />
                  <InfoRow label="Client" value={project.client} />

                  {/* Languages — pill tags */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                    <span className="text-[11px] uppercase tracking-[3px] text-[#F7AB0A] font-semibold shrink-0 sm:w-28 sm:pt-1">
                      Languages
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.languages.map((lang) => (
                        <span
                          key={lang}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-white/6 text-white/80 border border-white/10"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Preview link — only shown when provided */}
                  {project.preview && (
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="text-[11px] uppercase tracking-[3px] text-[#F7AB0A] font-semibold shrink-0 sm:w-28">
                        Preview
                      </span>
                      <a
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#F7AB0A]/80 hover:text-[#F7AB0A] underline underline-offset-4 transition-colors duration-200 break-all"
                      >
                        {project.preview} ↗
                      </a>
                    </div>
                  )}

                  {/* Description — full width, label above text */}
                  <div className="flex flex-col gap-2 pt-1">
                    <span className="text-[11px] uppercase tracking-[3px] text-[#F7AB0A] font-semibold">
                      Description
                    </span>
                    <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

                {/* Video section */}
                <div>
                  <p className="text-[11px] uppercase tracking-[3px] text-[#F7AB0A] font-semibold mb-4">
                    Demo Video
                  </p>
                  {project.videoUrl ? (
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
                      <iframe
                        src={project.videoUrl}
                        title={`${project.title} demo`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-video rounded-xl flex flex-col items-center justify-center gap-3 bg-white/3 border border-dashed border-white/10">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-10 h-10 fill-white/15"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <p className="text-[11px] uppercase tracking-[4px] text-white/25">
                        Demo coming soon
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
      <span className="text-[11px] uppercase tracking-[3px] text-[#F7AB0A] font-semibold shrink-0 sm:w-28">
        {label}
      </span>
      <span className="text-sm sm:text-base text-white/85">{value}</span>
    </div>
  );
}
