import type { NextPage } from "next";
import { MutableRefObject, useEffect, useRef } from "react";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import ProjectList from "../components/projects/ProjectList";
import useOnScreen from "../hooks/useOnScreen";

const Home: NextPage = () => {
  const refSections = useRef() as MutableRefObject<HTMLDivElement>;

  const refHeroSection = useRef() as MutableRefObject<HTMLDivElement>;
  const refProjectsSection = useRef() as MutableRefObject<HTMLDivElement>;
  const refBlogSection = useRef() as MutableRefObject<HTMLDivElement>;
  const refContactSection = useRef() as MutableRefObject<HTMLDivElement>;

  const isHeroOnScreen = useOnScreen(refHeroSection);
  const isProjectsOnScreen = useOnScreen(refProjectsSection);
  const isBlogOnScreen = useOnScreen(refBlogSection);
  const isContactOnScreen = useOnScreen(refContactSection);

  return (
    <div className="bg-primary-900 relative ">
      <Navbar />
      <div className=" snap-mandatory snap-y overflow-scroll h-screen w-screen">
        <div
          ref={refHeroSection}
          className="mb-2 h-screen snap-start snap-always flex relative w-full"
        >
          <Hero />
          <div className="text-primary-100 absolute bottom-28 -left-6 rotate-90 ">
            {" "}
            <div className="animate-pulse">scroll down -&gt;</div>
          </div>
          <div className="text-primary-100 absolute bottom-28 -right-8 rotate-90 ">
            {" "}
            <div className="animate-pulse">scroll down -&gt;</div>
          </div>
        </div>
        <div
          ref={refProjectsSection}
          className="mb-2 h-screen w-full snap-start snap-always flex bg-primary-100"
        >
          <ProjectList />
        </div>
        <div
          ref={refBlogSection}
          className="mb-2 h-screen w-full snap-start snap-always flex bg-primary-900"
        ></div>
        <div
          ref={refContactSection}
          className="h-screen w-screen snap-start snap-always flex bg-primary-100 relative"
        ></div>
      </div>

      <div className="flex flex-col justify-evenly items-center absolute top-1/3 right-3 h-1/4 W-6">
        <div
          className={`w-2 h-2 rounded-full bg-white ${
            isHeroOnScreen ? "scale-150" : ""
          }`}
        ></div>
        <div
          className={`w-2 h-2 rounded-full bg-white ${
            isProjectsOnScreen ? "scale-150" : ""
          }`}
        ></div>
        <div
          className={`w-2 h-2 rounded-full bg-white ${
            isBlogOnScreen ? "scale-150" : ""
          }`}
        ></div>
        <div
          className={`w-2 h-2 rounded-full bg-white ${
            isContactOnScreen ? "scale-150" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Home;
