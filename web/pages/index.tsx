import type { NextPage } from "next";
import { MutableRefObject, useEffect, useRef } from "react";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import ProjectList from "../components/projects/ProjectList";
import ScrollCounter from "../components/scroll-counter/ScrollCounter";
import useOnScreen from "../hooks/useOnScreen";

const Home: NextPage = () => {
  const refHeroSection = useRef() as MutableRefObject<HTMLDivElement>;
  const refProjectsSection = useRef() as MutableRefObject<HTMLDivElement>;
  const refBlogSection = useRef() as MutableRefObject<HTMLDivElement>;
  const refContactSection = useRef() as MutableRefObject<HTMLDivElement>;

  const isHeroOnScreen = useOnScreen(refHeroSection);
  const isProjectsOnScreen = useOnScreen(refProjectsSection);
  const isBlogOnScreen = useOnScreen(refBlogSection);
  const isContactOnScreen = useOnScreen(refContactSection);

  const sectionProps = [
    { ref: refHeroSection, isOnScreen: isHeroOnScreen },
    { ref: refProjectsSection, isOnScreen: isProjectsOnScreen },
    { ref: refBlogSection, isOnScreen: isBlogOnScreen },
    { ref: refContactSection, isOnScreen: isContactOnScreen },
  ];

  return (
    <div className="bg-primary-900 relative ">
      <Navbar />
      <div className=" snap-mandatory snap-y overflow-scroll h-screen w-screen">
        <div
          ref={refHeroSection}
          className="mb-1 h-screen snap-start snap-always flex relative w-full"
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
          className="mb-1 pt-16 pb-24 h-screen w-full snap-start snap-always flex bg-primary-600"
        >
          <ProjectList />
        </div>
        <div
          ref={refBlogSection}
          className="mb-1 h-screen w-full snap-start snap-always flex bg-primary-900"
        ></div>
        <div
          ref={refContactSection}
          className="h-screen w-screen snap-start snap-always flex bg-primary-600 relative"
        ></div>
      </div>

      <ScrollCounter sections={sectionProps} />
    </div>
  );
};

export default Home;
