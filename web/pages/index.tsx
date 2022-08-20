import type { NextPage } from "next";
import { MutableRefObject, useEffect, useRef } from "react";
import PostsList from "../components/blog/PostsList";
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
    <div className="container bg-primary-900">
      <Navbar />
      {/* Scroll Container */}
      <div className="section__container">
        {/* Section */}
        <div ref={refHeroSection} className="section relative">
          <Hero />
          <div className=" absolute bottom-1/4 -left-6 rotate-90 ">
            {" "}
            <div className="animate-pulse">scroll down -&gt;</div>
          </div>
          <div className=" absolute bottom-1/4 -right-8 rotate-90 ">
            {" "}
            <div className="animate-pulse">scroll down -&gt;</div>
          </div>
        </div>

        {/* Section */}
        <div ref={refProjectsSection} className="section bg-primary-600">
          <ProjectList />
        </div>

        {/* Section */}
        <div ref={refBlogSection} className="section bg-primary-900">
          <PostsList />
        </div>

        {/* Section */}
        <div ref={refContactSection} className="section bg-primary-600"></div>
      </div>

      <ScrollCounter sections={sectionProps} />
    </div>
  );
};

export default Home;
