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
    title: "Food Delivery",
    desc: "Food delivery application for customers and /admin roote for employees.",
    stack: ["JavaScrip", "React"],
    demoLink: "https://delivery-app-mladenovic-13.vercel.app",
    githubLink: "https://github.com/mladenovic-13/delivery-app",
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
    <div className="flex flex-col justify-evenly w-full px-10">
      <h2 className="mb-2 text-center text-xl text-primary-100 font-extralight">
        Realised projects
      </h2>
      <div className="h-full flex flex-col justify-evenly">
        {projectCards.map((card, index) => (
          <ProjectCard {...card} key={index} />
        ))}
      </div>
      <p className="mb-2 text-primary-100 underline underline-offset-8 font-light tracking-widest text-center animate-bounce">
        View More &gt;
      </p>
    </div>
  );
};

export default ProjectList;
