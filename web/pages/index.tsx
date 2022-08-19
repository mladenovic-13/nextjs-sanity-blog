import type { NextPage } from "next";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import ProjectList from "../components/projects/ProjectList";

const Home: NextPage = () => {
  return (
    <div className="bg-primary-900">
      <Navbar />
      <div className="snap-mandatory snap-y overflow-scroll h-screen">
        <div className="h-screen snap-start flex">
          <Hero />
        </div>
        <div className="h-screen snap-start flex bg-primary-100">
          <ProjectList />
        </div>
        <div className="h-screen snap-start flex bg-primary-600"></div>
        <div className="h-screen snap-start flex bg-primary-300"></div>
      </div>

      <div className="text-primary-100 absolute bottom-20 -left-6 rotate-90 ">
        {" "}
        <div className="animate-pulse">scroll down -&gt;</div>
      </div>
      <div className="text-primary-100 absolute bottom-20 -right-8 rotate-90 ">
        {" "}
        <div className="animate-pulse">scroll down -&gt;</div>
      </div>
    </div>
  );
};

export default Home;
