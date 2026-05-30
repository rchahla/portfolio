import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";
import { motion } from "framer-motion";
import portfolioImg from "../Images/Portfolio-img2.png";
import AboutExperience from "./AboutModels/AboutExperience";
import StarsBackground from "./StarsBackground";
import Particles from "./AboutModels/Particles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
type Props = {};

export default function About({}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const years = useCountUp(1, isInView);
  const projects = useCountUp(15, isInView);
  const stacks = useCountUp(5, isInView);
  const ui = useCountUp(10, isInView);
  return (
    <div
      className="relative w-full h-screen flex flex-col items-center text-center  px-6 md:px-20 overflow-x-hidden 
    overflow-y-hidden scrollbar-track-none scrollbar-thumb-[#F7AB0A]/80"
    >
      {/* <StarsBackground /> */}
      {/* <Particles count={100} /> */}

      <h3 className=" mt-24  uppercase tracking-[20px] text-3xl  ">About</h3>

      {/* Room 3D Model */}

      <figure>
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 2 }}
          className="hero-3d-layout  "
        >
          <AboutExperience />
        </motion.div>
      </figure>

      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 2 }}
        className="absolute w-full h-[40%] bottom-0  xl:w-[50%] right-0 xl:h-[80%] text-left pl-4"
      >
        <h1 className="uppercase text-2xl font-extrabold mb-5">
          Personal <span className="text-yellow-500">Info</span>{" "}
        </h1>

        <div className="grid grid-cols-2 gap-4 mb-10 max-w-xl ">
          <p>
            <span className="text-white/60 block sm:inline">Name:</span>{" "}
            <span className="font-semibold text-white block sm:inline">
              Riad Chahla
            </span>
          </p>

          <p>
            <span className="text-white/60 block sm:inline">Age:</span>{" "}
            <span className="font-semibold text-white block sm:inline">22</span>
          </p>

          <p>
            <span className="text-white/60 block sm:inline">Address:</span>{" "}
            <span className="font-semibold text-white block sm:inline">
              Ontario, Canada
            </span>
          </p>

          <p>
            <span className="text-white/60 block sm:inline">Nationality:</span>{" "}
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
            <span className="text-white/60 block sm:inline">Availability:</span>{" "}
            <span className="font-semibold text-white block sm:inline">
              Remote & On-site
            </span>
          </p>

          <p>
            <span className="text-white/60 block sm:inline">Education:</span>{" "}
            <span className="font-semibold text-white block sm:inline">
              University of Western Ontario
            </span>
          </p>

          <p>
            <span className="text-white/60 block sm:inline">Hobbies:</span>{" "}
            <span className="font-semibold text-white block sm:inline">
              Gym, Traveling, Coding, Cooking, Hiking, Exploring
            </span>
          </p>
        </div>

        <a
          href="/riad_chahla_cv.pdf"
          download
          className="group flex items-center bg-black  justify-between border cursor-pointer  rounded-4xl text-left   
        w-50 h-12 uppercase text-sm font-semibold mb-7 transition-all duration-300
         hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.4)]  "
        >
          <span className="pl-3">Download Resume</span>
          <FontAwesomeIcon
            className="right-0 scale-250 pr-2   text-white transition-all duration-300 group-hover:text-yellow-400 group-hover:translate-y-0.5"
            icon={faCircleArrowDown}
          />
        </a>

        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-2 gap-4 max-w-xl mr-2 : "
        >
          <div
            className="border border-white bg-black rounded-lg p-6 items-center text-left sm:pt-5 pt-4 sm:pr-7 
            pr-5 sm:pb-6 pb-5 sm:pl-6 xl:pl-10 pl-4 sm:mb-7 mb-6   
                 "
          >
            <div className="relative flex items-start">
              <span className="text-4xl font-bold leading-none">{years}</span>
              <span className="absolute -top-1 pl-5 text-2xl font-extrabold">
                +
              </span>
            </div>
            <div>
              <p className="uppercase text-sm font-semibold flex mt-2 ml-1">
                <span className="hidden sm:inline-block mr-2 min-w-[30px] h-[2px] bg-gray-500 mt-2"></span>
                <span className="sm:pl-2 pl-0 sm:text-base text-sm">
                  Years of Experience
                </span>
              </p>
            </div>
          </div>
          <div
            className=" border border-white bg-black rounded-lg p-6 items-center text-left sm:pt-5 pt-4 sm:pr-7 
            pr-5 sm:pb-6 pb-5 sm:pl-6 xl:pl-10 pl-4 sm:mb-7 mb-6 "
          >
            <div className="relative flex items-start">
              <span className="text-4xl font-bold leading-none">
                {projects}
              </span>
              <span className="absolute -top-1 pl-10 text-2xl font-extrabold">
                +
              </span>
            </div>
            <div>
              <p className="uppercase text-sm font-semibold flex mt-2 ml-1 ">
                <span className="hidden sm:inline-block mr-2 min-w-[30px] h-[2px] bg-gray-500 mt-2"></span>
                <span className="sm:pl-2 pl-0 sm:text-base text-sm  ">
                  Projects Built
                </span>
              </p>
            </div>
          </div>

          <div
            className="border border-white bg-black rounded-lg p-6 items-center text-left sm:pt-5 pt-4 sm:pr-7 
            pr-5 sm:pb-6 pb-5 sm:pl-6 xl:pl-10 pl-4 sm:mb-7 mb-6"
          >
            <div className="relative flex items-start">
              <span className="text-4xl font-bold leading-none">{stacks}</span>
              <span className="absolute -top-1 pl-5 text-2xl font-extrabold">
                +
              </span>
            </div>
            <div>
              <p className="uppercase text-sm font-semibold flex mt-2 ml-1">
                <span className="hidden sm:inline-block mr-2 min-w-[30px] h-[2px] bg-gray-500 mt-2"></span>
                <span className="sm:pl-2 pl-0 sm:text-base text-sm">
                  Tech Stacks Used
                </span>
              </p>
            </div>
          </div>
          <div
            className="border border-white bg-black rounded-lg p-6 items-center text-left sm:pt-5 pt-4 sm:pr-7 
            pr-5 sm:pb-6 pb-5 sm:pl-6 xl:pl-10 pl-4 sm:mb-7 mb-6"
          >
            <div className="relative flex items-start">
              <span className="text-4xl font-bold leading-none">{ui}</span>
              <span className="absolute -top-1 pl-11 text-2xl font-extrabold">
                +
              </span>
            </div>
            <div>
              <p className="uppercase text-sm font-semibold flex mt-2 ml-1">
                <span className="hidden sm:inline-block mr-2 min-w-[30px] h-[2px] bg-gray-500 mt-2"></span>
                <span className="sm:pl-2 pl-0 sm:text-base text-sm">
                  UI Components Designed / Built
                </span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
