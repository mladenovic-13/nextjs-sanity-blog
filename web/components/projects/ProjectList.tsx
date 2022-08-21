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
  // {
  //   title: "Food Delivery",
  //   desc: "Food delivery application for customers and /admin roote for employees.",
  //   stack: ["JavaScrip", "React"],
  //   demoLink: "https://delivery-app-mladenovic-13.vercel.app",
  //   githubLink: "https://github.com/mladenovic-13/delivery-app",
  // },
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
    <div className="list__cards">
      <h1 className="hidden md:block text-center text-3xl font-extralight uppercase">
        projects
      </h1>
      <div className="space__cards ">
        <h2 className="section__heading md:hidden">latest projects</h2>
        {projectCards.map((card, index) => (
          <ProjectCard {...card} key={index} />
        ))}
        <p className="view__more mb-2 md:hidden">View More &gt;</p>
      </div>
      <p className="view__more hidden mb-2 md:block">View More &gt;</p>
    </div>
  );
};

export default ProjectList;
