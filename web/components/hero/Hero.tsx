import Head from "next/head";
import Image from "next/image";
import React from "react";
import CTA from "../buttons/CTA";

const Hero = () => {
  return (
    <div className="relative h-full pt-2 flex flex-col md:flex-row bg-primary-900">
      <div className="px-4 flex flex-col justify-around h-3/5">
        <div>
          <p className="text-xs text-primary-300 italic">{"<h1>"}</p>
          <div className="pl-4 space-y-3 flex flex-col text-primary-100 text-5xl font-extralight tracking-wider">
            <p>Hi,</p>
            <p>
              <span className="font-semibold">I&apos;m </span>Nikola,
            </p>
            <p>
              Web<span className="font-semibold"> Developer</span>.
            </p>
          </div>
          <p className="text-xs text-primary-300 italic">{"</h1>"}</p>
        </div>
        <div className="mt-1">
          <p className="text-xs text-primary-300 italic">{"<p>"}</p>
          <p className="pl-4 text-2xl font-light  text-gray-400">
            Full-stack Web Developer
          </p>
          <p className="text-xs text-primary-300 italic">{"</p>"}</p>
        </div>
        <CTA />
      </div>
      <div className="relative w-full h-3/5">
        <Image src="/icons/hero.png" alt="Hero Image" layout="fill" />
      </div>
    </div>
  );
};

export default Hero;
