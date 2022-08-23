import React, { ReactNode } from "react";
import BlogNavbar from "../navbar/BlogNavbar";
import Navbar from "../navbar/Navbar";

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <main className="w-full">
      <div className="md:w-1/5">
        <BlogNavbar />
      </div>
      <div className="px-3 my-3 md:w-4/5">{children}</div>
    </main>
  );
};

export default Layout;
