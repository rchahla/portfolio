import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex sticky top-0 justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center">
      <div className="flex flex-row items-center space-x-3">
        {/* Social Icons */}
        <SocialIcon url="https://www.linkedin.com/in/riad-chahla" />
        <SocialIcon url="https://github.com/rchahla" />
      </div>

      <div className="flex flex-row items-center space-x-2 text-gray-400 cursor-pointer ">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          //   fgColor="gray"
          //   bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-500">
          Get In Touch
        </p>
      </div>
    </header>
  );
}
