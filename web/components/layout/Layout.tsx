import React, { ReactNode, useState } from "react";
import MainMask from "../mask/MainMask";
import BlogNavbar from "../navbar/BlogNavbar";
import Sidebar from "../navbar/Sidebar";

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="bg-slate-900">
      <MainMask isBlog />
      <BlogNavbar />
      <div className="flex flex-col lg:flex-row lg:h-full lg:relative">
        <div className="hidden lg:inline-block lg:sticky lg:top-[49px] h-[calc(100vh-49px)]">
          <Sidebar isDesktop />
        </div>

        <div className="p-3 lg:inline-block lg:px-8 lg:py-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
