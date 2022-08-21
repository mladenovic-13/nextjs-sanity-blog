import Image from "next/image";
import React from "react";
import CTA from "../buttons/CTA";

const Hero = () => {
  return (
    <div className="relative h-full pt-2 flex flex-col md:flex-row">
      <div className="px-4 flex flex-col justify-center h-[55%]">
        <div className="flex flex-col justify-evenly  h-[90%]">
          <div className="pl-4 space-y-3 flex flex-col  text-5xl font-extralight tracking-wider">
            <p>Hi,</p>
            <p>
              <span className="font-semibold">I&apos;m </span>Nikola,
            </p>
            <p>
              Web<span className="font-semibold"> Developer</span>.
            </p>
          </div>
          <div className="mt-1">
            <p className="pl-4 text-2xl font-light  text-gray-400">
              Full-stack Web Developer
            </p>
          </div>
          <CTA />
        </div>
      </div>
      <div className="relative w-full h-[45%]">
        <Image priority src="/icons/hero.png" alt="Hero Image" layout="fill" />
      </div>
    </div>
  );
};

export default Hero;
