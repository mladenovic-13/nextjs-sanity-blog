import React from "react";
import ProjectCard from "../cards/ProjectCard";

const projectCards: ProjectCardProps[] = [
  {
    title: "Apartment Booking",
    desc: "Application for booking rooms and houses",
    stack: ["NextJS", "TypeScript", "Styled Components"],
  },
  {
    title: "Floteq",
    desc: "Full-stack website for start-up from Australia.",
    stack: ["Gatsby", "React", "TailwindCSS"],
  },
  {
    title: "Food Delivery",
    desc: "Food delivery application for customers and /admin roote for employees.",
    stack: ["JavaScrip", "React", "Styled Components"],
  },
  {
    title: "Admin Dashboard",
    desc: "Professional admin dashboard with Firebase Auth and CRUD functions.",
    stack: ["Firebase", "TypeScript", "Styled Components"],
  },
];

const ProjectList = () => {
  return (
    <div className="container flex flex-col relative">
      <div className="h-full  gap-1 px-12 flex flex-col justify-evenly">
        {projectCards.map((card, index) => (
          <ProjectCard {...card} key={index} />
        ))}
      </div>
      <p className="absolute text-primary-100 font-light tracking-widest text-center -bottom-10 left-0 right-0 animate-bounce">
        View More &gt;
      </p>
    </div>
  );
};

export default ProjectList;
