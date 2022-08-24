import React from "react";
import ProjectCard from "../cards/ProjectCard";

const projectCards: ProjectCardProps[] = [
  {
    title: "Apartment Booking",
    desc: "Application for booking rooms and houses",
    stack: ["NextJS", "TypeScript"],
    githubLink: "https://github.com/mladenovic-13/booking-app",
    demoLink: "https://booking-app-steel.vercel.app",
  },
  {
    title: "Floteq",
    desc: "Full-stack website for start-up from Australia.",
    stack: ["Gatsby", "React", "TailwindCSS"],
    demoLink: "https://www.floteq.com.au/",
    githubLink: "https://github.com/mladenovic-13/floteq-website",
  },
  {
    title: "Admin Dashboard",
    desc: "Professional admin dashboard with Firebase Auth and CRUD functions.",
    stack: ["Firebase", "TypeScript"],
    demoLink: "https://admin-dashboard-two-ochre.vercel.app",
    githubLink: "https://github.com/mladenovic-13/delivery-app",
  },
  {
    title: "Apartment Booking",
    desc: "Application for booking rooms and houses",
    stack: ["NextJS", "TypeScript"],
    githubLink: "https://github.com/mladenovic-13/booking-app",
    demoLink: "https://booking-app-steel.vercel.app",
  },
  {
    title: "Floteq",
    desc: "Full-stack website for start-up from Australia.",
    stack: ["Gatsby", "React", "TailwindCSS"],
    demoLink: "https://www.floteq.com.au/",
    githubLink: "https://github.com/mladenovic-13/floteq-website",
  },
  {
    title: "Admin Dashboard",
    desc: "Professional admin dashboard with Firebase Auth and CRUD functions.",
    stack: ["Firebase", "TypeScript"],
    demoLink: "https://admin-dashboard-two-ochre.vercel.app",
    githubLink: "https://github.com/mladenovic-13/delivery-app",
  },
];

const ProjectList = () => {
  return (
    <>
      {/* MOBILE */}
      <div className="mobile list__cards">
        <div className="space__cards ">
          <h2 className="section__heading">projects</h2>
          {projectCards.slice(0, 3).map((card, index) => (
            <ProjectCard {...card} key={index} />
          ))}
          <p className="view__more mb-2">View More &gt;</p>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="desktop md:flex flex-col gap-10 justify-evenly h-[95%] w-[95%]">
        <h1 className="text-center text-3xl font-extralight uppercase">
          projects
        </h1>
        <div className="flex flex-row flex-wrap flex-1 justify-center gap-4">
          {projectCards.map((card, index) => (
            <div key={index} className="w-[30%] h-[47%]">
              <ProjectCard {...card} />
            </div>
          ))}
        </div>
        <p className="view__more s">View More &gt;</p>
      </div>
    </>
  );
};

export default ProjectList;
