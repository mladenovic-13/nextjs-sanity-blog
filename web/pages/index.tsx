import type { NextPage } from "next";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";

const Home: NextPage = () => {
  return (
    <div className="bg-primary-900 w-screen h-screen relative">
      <Navbar />
      <Hero />

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
