import { Dialog } from "@headlessui/react";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import Sidebar from "../navbar/Sidebar";

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-slate-900">
      <div className="absolute z-50 top-0 inset-x-0 flex justify-end overflow-hidden pointer-events-none">
        <div className="relative h-screen w-[60rem]">
          <Image
            src="/images/bg-img.avif"
            objectFit="cover"
            layout="fill"
            alt=""
          />
        </div>
      </div>
      <div className="hidden sticky top-0 z-50 w-full py-3 px-6 lg:flex justify-between backdrop-blur border-b-[1px] border-slate-700/90">
        <div className="flex font-semibold">Mladenovic13</div>
        <div className="w-1/3 text-xs font-bold flex justify-evenly items-center">
          <div>About Me</div>
          <div>Projects</div>
          <div>Blog</div>
          <div>Contac Me</div>
          <div className="w-1/6 flex justify-evenly border-l-[1px] border-slate-700/90">
            <div>git</div>
            <div>Li</div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 bg-slate-900/70 backdrop-blur lg:hidden">
        <div className="mx-3 py-2 flex justify-between text-base border-b-[1px] border-slate-700/90">
          <div>Logo</div>
          <div className="w-[10%] flex justify-between">
            <div>S</div>
            <div>M</div>
          </div>
        </div>
        <div className="px-3 py-2 flex items-center gap-[3%] border-b-[1px] border-slate-700/90">
          <div
            onClick={() => setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen)}
            className="text-base"
          >
            S
          </div>
          <div>Category</div>
          <div>{">"}</div>
          <div>Post Title</div>
        </div>
      </div>
      <Dialog open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <div
          className="fixed inset-0 bg-slate-800/80 backdrop-blur-sm"
          aria-hidden="true"
        />
        <Dialog.Panel>
          <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
        </Dialog.Panel>
      </Dialog>

      <div className="flex flex-col lg:flex-row">
        <div className="hidden lg:block">
          <Sidebar isDesktop />
        </div>

        <div className="p-3 lg:px-8 lg:py-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
