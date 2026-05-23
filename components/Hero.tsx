import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name is Riad Chahla",
      "I love to code",
      "Welcome to my portfolio",
    ],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.licdn.com/dms/image/v2/D4E03AQGRbp9k-ZysYw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718252449616?e=1781136000&v=beta&t=6FgpXp0oAdkoQtWA01IhHx_TFYZYDm_MOBUlGsal1T0"
        alt=""
      />

      <div className="z-20">
        <h2 className="text-sm uppercase font-semibold pb-2 tracking-[15px] ">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="orange" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experince</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
