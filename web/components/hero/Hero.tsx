import Head from "next/head";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="px-4 pt-28 flex flex-col justify-between bg-primary-900">
      <div className="flex flex-col">
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
        <div className="mt-4">
          <p className="text-xs text-primary-300 italic">{"<p>"}</p>
          <p className="pl-4 text-2xl font-light  text-gray-400">
            Full-stack Web Developer
          </p>
          <p className="text-xs text-primary-300 italic">{"</p>"}</p>
        </div>
      </div>
      <button className="text-primary-100 font-semibold mx-auto px-4 py-2 border-2 w-2/5 rounded-sm">
        MY PROJECTS
      </button>
      <Image
        className="z-10"
        src="/icons/hero.png"
        alt="Hero Image"
        width={600}
        height={600}
      />
    </div>
  );
};

export default Hero;
