import type { NextPage } from "next";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";

const Home: NextPage = () => {
  return (
    <div className="bg-primary-600">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
