import React from "react";
import ProjectCard from "../cards/ProjectCard";

const projectCards: ProjectCardProps[] = [
  {
    title: "Apartment Booking",
    desc: "Application for booking rooms and houses",
    stack: ["NextJS", "TypeScript", "Styled Components"],
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
    stack: ["JavaScrip", "React", "Styled Components"],
    demoLink: "https://delivery-app-mladenovic-13.vercel.app",
    githubLink: "https://github.com/mladenovic-13/delivery-app",
  },
  {
    title: "Admin Dashboard",
    desc: "Professional admin dashboard with Firebase Auth and CRUD functions.",
    stack: ["Firebase", "TypeScript", "Styled Components"],
    demoLink: "https://admin-dashboard-two-ochre.vercel.app",
    githubLink: "https://github.com/mladenovic-13/delivery-app",
  },
];

const ProjectList = () => {
  return (
    <div className="flex flex-col relative">
      <div className="h-full  gap-2 px-12 flex flex-col">
        {projectCards.map((card, index) => (
          <ProjectCard {...card} key={index} />
        ))}
      </div>
      <p className="mt-3 text-primary-100 font-light tracking-widest text-center animate-bounce">
        View More &gt;
      </p>
    </div>
  );
};

export default ProjectList;
