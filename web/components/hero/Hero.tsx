import Head from "next/head";
import Image from "next/image";
import React from "react";
import CTA from "../buttons/CTA";

const Hero = () => {
  return (
    <div className="pt-16 flex flex-col gap-6 md:flex-row  bg-primary-900">
      <div className="px-4 flex flex-col">
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
        <div className="mt-1">
          <p className="text-xs text-primary-300 italic">{"<p>"}</p>
          <p className="pl-4 text-2xl font-light  text-gray-400">
            Full-stack Web Developer
          </p>
          <p className="text-xs text-primary-300 italic">{"</p>"}</p>
        </div>
      </div>
      <CTA />
      <div className="w-full mb-10 relative">
        <Image
          className="z-10"
          src="/icons/hero.png"
          alt="Hero Image"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default Hero;
