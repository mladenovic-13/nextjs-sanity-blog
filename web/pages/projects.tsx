import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticProps, NextPage } from "next";
import React, { ReactElement } from "react";
import ProjectCard from "../components/cards/ProjectCard";
import MainLayout from "../components/layout/IndexLayout";
import MainMask from "../components/mask/MainMask";
import { fetchRepos, useRepos } from "../hooks/githubRepos";
import { NextPageWithLayout } from "./_app";

const Projects: NextPageWithLayout = () => {
  const { data } = useRepos();

  return (
    <div className="w-full min-h-screen py-16 bg-slate-900">
      <MainMask />
      <h1 className="section__heading mb-6">Projects</h1>
      <div
        className="w-full flex items-center gap-6 flex-col 
                   lg:w-[95%] lg:flex-row lg:flex-wrap lg:justify-center lg:mx-auto"
      >
        {data?.map((project) => (
          <div className=" w-[80%] h-52 lg:w-[30%] lg:h-52" key={project.name}>
            <ProjectCard
              isProjectPage
              title={project.name}
              desc={project.description || "No Description"}
              demoLink={project.homepageUrl || ""}
              githubLink={project.url}
              stack={["No stack"]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery(["repos"], () => fetchRepos());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

Projects.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Projects;
