import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import SkillsSection from "./SkillsSection";

type StatCardProps = { value: number; label: string };

function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="border border-white bg-black rounded-lg p-5 xl:p-7 text-left">
      <div className="flex items-start gap-0.5">
        <span className="text-4xl font-bold leading-none">{value}</span>
        <span className="text-2xl font-extrabold leading-none mt-0.5">+</span>
      </div>
      <p className="uppercase text-sm font-semibold flex items-center mt-3">
        <span className="hidden sm:inline-block mr-2 min-w-7.5 h-0.5 bg-gray-500 shrink-0"></span>
        <span className="sm:pl-2 pl-0 leading-snug">{label}</span>
      </p>
    </div>
  );
}

type Props = {};

export default function About({}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const years = useCountUp(1, isInView);
  const projects = useCountUp(15, isInView);
  const stacks = useCountUp(5, isInView);
  const ui = useCountUp(10, isInView);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center px-6 md:px-20 overflow-x-hidden">
      <div className="mt-24 flex flex-col items-center gap-4">
        <h3 className="uppercase tracking-[20px] text-3xl text-center">
          About
        </h3>
        <div className="w-20 h-px bg-linear-to-r from-transparent via-[#F7AB0A]/55 to-transparent" />
      </div>

      <div className="w-full max-w-6xl mt-12 flex flex-col lg:flex-row lg:items-start lg:gap-16 pb-16">
        {/* Left column: personal info + resume button */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left"
        >
          <h1 className="uppercase text-2xl font-extrabold mb-5">
            Personal <span className="text-yellow-500">Info</span>
          </h1>

          <div className="grid grid-cols-2 gap-4 mb-10 max-w-xl">
            <p>
              <span className="text-white/60 block sm:inline">Name:</span>{" "}
              <span className="font-semibold text-white block sm:inline">
                Riad Chahla
              </span>
            </p>

            <p>
              <span className="text-white/60 block sm:inline">Age:</span>{" "}
              <span className="font-semibold text-white block sm:inline">
                22
              </span>
            </p>

            <p>
              <span className="text-white/60 block sm:inline">Address:</span>{" "}
              <span className="font-semibold text-white block sm:inline">
                Ontario, Canada
              </span>
            </p>

            <p>
              <span className="text-white/60 block sm:inline">
                Nationality:
              </span>{" "}
              <span className="font-semibold text-white block sm:inline">
                Canadian
              </span>
            </p>

            <p>
              <span className="text-white/60 block sm:inline">
                Favourite Stack:
              </span>{" "}
              <span className="font-semibold text-white block sm:inline">
                React, TypeScript, Node.js
              </span>
            </p>

            <p>
              <span className="text-white/60 block sm:inline">Email:</span>{" "}
              <span className="font-semibold text-white block sm:inline">
                rchahla2@uwo.ca
              </span>
            </p>

            <p>
              <span className="text-white/60 block sm:inline">Languages:</span>{" "}
              <span className="font-semibold text-white block sm:inline">
                English, Arabic
              </span>
            </p>

            <p>
              <span className="text-white/60 block sm:inline">
                Availability:
              </span>{" "}
              <span className="font-semibold text-white block sm:inline">
                Remote &amp; On-site
              </span>
            </p>

            <p className="col-span-2">
              <span className="text-white/60 block sm:inline">Education:</span>{" "}
              <span className="font-semibold text-white block sm:inline">
                University of Western Ontario - Dean&apos;s Honour List
              </span>
            </p>

            <p className="col-span-2">
              <span className="text-white/60 block sm:inline">Hobbies:</span>{" "}
              <span className="font-semibold text-white block sm:inline">
                Gym, Traveling, Coding, Cooking, Hiking, Exploring
              </span>
            </p>
          </div>

          <a
            href="/riad_chahla_cv.pdf"
            download
            className="group flex items-center bg-black justify-between border cursor-pointer rounded-4xl text-left
              w-50 h-12 uppercase text-sm font-semibold transition-all duration-300
              hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.4)]"
          >
            <span className="pl-3">Download Resume</span>
            <FontAwesomeIcon
              className="scale-250 pr-2 text-white transition-all duration-300 group-hover:text-yellow-400 group-hover:translate-y-0.5"
              icon={faCircleArrowDown}
            />
          </a>
        </motion.div>

        {/* Right column: 2x2 stat cards */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="lg:w-[45%] shrink-0 mt-12 lg:mt-0"
        >
          <div className="grid grid-cols-2 gap-4">
            <StatCard value={years} label="Years of Experience" />
            <StatCard value={projects} label="Projects Built" />
            <StatCard value={stacks} label="Tech Stacks Used" />
            <StatCard value={ui} label="UI Components Designed / Built" />
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="w-full max-w-6xl h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-12" />

      {/* Skills — spans full content width below the two-column block */}
      <SkillsSection />
    </div>
  );
}
