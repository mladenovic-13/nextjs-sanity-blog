import React, { ReactNode } from "react";
import BlogNavbar from "../navbar/BlogNavbar";
import Sidebar from "../navbar/Sidebar";

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <main className="w-full lg:flex">
      <div className="">
        <div className="lg:hidden">
          <BlogNavbar />
        </div>
        <div className="hidden lg:block lg:sticky lg:inset-0">
          <Sidebar isDesktop={true} />
        </div>
      </div>
      <div className="px-3 my-3 lg:px-12">{children}</div>
    </main>
  );
};

export default Layout;
