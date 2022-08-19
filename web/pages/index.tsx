import type { NextPage } from "next";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import ProjectList from "../components/projects/ProjectList";

const Home: NextPage = () => {
  return (
    <div className="bg-primary-900">
      <Navbar />
      <div className="snap-mandatory snap-y overflow-scroll h-screen w-screen">
        <div className="h-full snap-start snap-always flex relative w-full">
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
        <div className="h-screen w-full snap-start snap-always flex bg-primary-100">
          <ProjectList />
        </div>
        <div className="h-screen w-full snap-start snap-always flex bg-primary-900"></div>
        <div className="h-screen w-screen snap-start snap-always flex bg-primary-100 relative"></div>
      </div>
    </div>
  );
};

export default Home;
