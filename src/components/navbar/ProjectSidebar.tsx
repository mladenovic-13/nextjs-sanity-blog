import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { useRepos } from "../../hooks/githubRepos";

interface IProjectSidebar {
  setIsSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isDesktop?: boolean;
}

const queryClient = new QueryClient();

const ProjectSidebar: FC<IProjectSidebar> = ({
  isDesktop,
  setIsSidebarOpen,
}) => {
  const { data } = useRepos();
  const router = useRouter();
  const [currentProject, setCurrentProject] = useState(
    router.asPath.replace("/project/", "")
  );

  useEffect(() => {
    setCurrentProject(router.asPath.replace("/project/", ""));
  }, [router.asPath]);

  return (
    <div
      className="z-30 fixed w-64 px-5 py-3 lg:py-16 inset-0 border-r-[1px] border-slate-200/10  bg-slate-900 overflow-y-auto scrollbar-thin scrollbar-sm scrollbar-thumb-slate-500 scrollbar-track-slate-800
    lg:w-60 lg:relative lg:h-full lg:scrollbar-thumb-slate-500
    "
    >
      <div className="tracking-wide text-sm cursor-pointer ">
        <div className="pb-4 tracking-wider font-bold">My Projects</div>
        <div className="transition ease-in-out duration-1000 border-l-[1px] border-slate-400/10">
          <div className="flex flex-col lg:text-xs space-y-4 w-full h-full text-slate-500 font-light lg:font-medium">
            {data?.map((project) => (
              <div
                onClick={() => {
                  setIsSidebarOpen &&
                    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);
                }}
                key={project.name}
                className={`${
                  currentProject === project.name &&
                  "border-l-2 text-primary-300 font-semibold"
                } -ml-[1.5px] px-3 w-full hover:border-l-[1px] hover:text-primary-300 border-primary-300 cursor-pointer`}
              >
                <Link href={`/project/${project.name}`}>{project.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {!isDesktop && (
        <button
          onClick={() =>
            setIsSidebarOpen &&
            setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen)
          }
          className="fixed top-3 left-[216px] text-3xl font-bold text-primary-100 "
        >
          <svg
            className="w-6 h-6 fill-slate-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default function Wraped(props: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <ProjectSidebar {...props} />
    </QueryClientProvider>
  );
}
