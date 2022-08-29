import { Dialog } from "@headlessui/react";
import React, { ReactNode, useState } from "react";
import MainMask from "../mask/MainMask";
import BlogSidebar from "../navbar/BlogSidebar";
import DesktopNavbar from "../navbar/DesktopNavbar";
import MobileNavbar from "../navbar/MobileNavbar";
import ProjectSidebar from "../navbar/ProjectSidebar";

interface ILayout {
  children: ReactNode;
  isProject?: boolean;
  isPost?: boolean;
}

const Layout: React.FC<ILayout> = ({ children, isPost, isProject }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-slate-900 min-h-screen">
      <MainMask isBlog />

      {/* Desktop navbar */}
      <DesktopNavbar />
      {/* Mobile navbar */}
      <MobileNavbar setIsSidebarOpen={setIsSidebarOpen} />
      {/* Sidebar modal - mobile only */}
      <Dialog open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <div
          className="z-30 fixed inset-0 bg-slate-800/80 backdrop-blur-sm"
          aria-hidden="true"
        />
        <Dialog.Panel>
          {isPost && <BlogSidebar setIsSidebarOpen={setIsSidebarOpen} />}
          {isProject && <ProjectSidebar setIsSidebarOpen={setIsSidebarOpen} />}
        </Dialog.Panel>
      </Dialog>
      <div className="flex flex-col lg:flex-row lg:h-full relative">
        <div className="hidden lg:inline-block lg:sticky lg:top-[49px] h-[calc(100vh-49px)]">
          {isPost && <BlogSidebar isDesktop />}
          {isProject && <ProjectSidebar isDesktop />}
        </div>

        <div className="p-3 lg:inline-block lg:px-16 lg:py-8">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
