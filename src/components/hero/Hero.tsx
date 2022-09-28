import Image from "next/image";
import React from "react";
import CTA from "../buttons/CTA";
import heroImg from "../../../public/icons/hero.png";

const Hero = () => {
  return (
    <div className="relative h-full w-full pt-2 flex flex-col md:flex-row md:max-w-4xl 2xl:max-w-5xl">
      <div className="px-4 flex flex-col justify-center h-[55%] md:h-full">
        <div className="flex flex-col justify-evenly  h-[90%] md:justify-start md:gap-[10%]">
          <div className="pl-3 space-y-3 flex flex-col  text-5xl font-extralight tracking-wider md:p-0 md:text-6xl">
            <p>Hi,</p>
            <h2>
              <span className="font-semibold">I&apos;m </span>Nikola,
            </h2>
            <h2>
              Web<span className="font-semibold"> Developer</span>.
            </h2>
          </div>
          <div className="mt-1">
            <h2 className="pl-4 text-2xl font-light  text-gray-400">
              Full-stack Web Developer
            </h2>
          </div>
          <CTA />
        </div>
      </div>
      <div className="relative w-full z-50 h-[45%] md:h-4/5 md:absolute md:bottom-0 md:right-0 md:w-3/5">
        <Image
          priority
          src={heroImg}
          alt="Nikola Mladenovic full stack developer from serbia image"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Hero;
