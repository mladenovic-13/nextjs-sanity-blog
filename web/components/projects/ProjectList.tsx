import React from "react";
import ProjectCard from "../cards/ProjectCard";

const ProjectList = () => {
  return (
    <div className="container flex flex-col relative">
      <div className="h-full  gap-6 px-12 flex flex-col justify-evenly">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <p className="absolute text-primary-100 font-light tracking-widest text-center -bottom-10 left-0 right-0 animate-bounce">
        View More &gt;
      </p>
    </div>
  );
};

export default ProjectList;
