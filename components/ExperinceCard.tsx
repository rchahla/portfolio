import { motion } from "framer-motion";

export type Experience = {
  role: string;
  company: string;
  dates: string;
  logoSrc?: string;
  logoAlt: string;
  logoBg: string;
  logoInitials?: string;
  tech?: { src: string; alt: string }[];
  bullets: string[];
};

type Props = {
  experience: Experience;
  index?: number;
  datesBelow?: boolean;
  forceAnimate?: boolean;
};

function ExperinceCard({ experience, index = 0, datesBelow = false, forceAnimate }: Props) {
  const animationProps =
    forceAnimate !== undefined
      ? { animate: { opacity: forceAnimate ? 1 : 0, x: forceAnimate ? 0 : -24 } }
      : { whileInView: { opacity: 1, x: 0 }, viewport: { once: true } };

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      {...animationProps}
      transition={{ duration: 0.55, delay: index * 0.15, ease: "easeOut" }}
      className="relative pl-14 pb-10 last:pb-0"
    >
      {/* Timeline dot — centered over the vertical line at left-5 */}
      <div
        className="absolute left-0 top-1 w-10 h-10 rounded-full border-2 border-[#F7AB0A] flex items-center justify-center shadow-[0_0_14px_rgba(247,171,10,0.3)] shrink-0 overflow-hidden"
        style={{ backgroundColor: experience.logoBg }}
      >
        {experience.logoSrc ? (
          <img
            className="w-[58%] h-[58%] object-contain"
            src={experience.logoSrc}
            alt={experience.logoAlt}
          />
        ) : (
          <span className="text-xs font-bold text-white tracking-tight">
            {experience.logoInitials ?? experience.logoAlt.slice(0, 2)}
          </span>
        )}
      </div>

      {/* Card */}
      <article
        className="bg-[#1e1e1e] rounded-xl p-5 sm:p-7 cursor-pointer
          border border-white/5
          hover:border-[#F7AB0A]/25 hover:bg-[#252525]
          hover:shadow-[0_8px_30px_rgba(0,0,0,0.45)]
          transition-all duration-300"
      >
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 mb-4">
          <div>
            <h4 className="text-lg sm:text-xl font-semibold leading-snug">
              {experience.role}
            </h4>
            <p className="text-[#F7AB0A] font-medium text-sm sm:text-base mt-0.5">
              {experience.company}
            </p>
            {datesBelow && (
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {experience.dates}
              </p>
            )}
          </div>
          {!datesBelow && (
            <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap pt-0.5">
              {experience.dates}
            </span>
          )}
        </div>

        {/* Tech stack icons */}
        {experience.tech && experience.tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {experience.tech.map(({ src, alt }) => (
              <img key={alt} src={src} alt={alt} title={alt} className="w-7 h-7" />
            ))}
          </div>
        )}

        {/* Bullet points */}
        <ul className="list-disc ml-4 space-y-1.5 text-sm sm:text-base text-gray-300 leading-relaxed">
          {experience.bullets.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </article>
    </motion.div>
  );
}

export default ExperinceCard;
