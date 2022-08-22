import React, { ReactNode } from "react";
import Navbar from "../navbar/Navbar";

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <h1>LAYOUT </h1>
      {children}
    </>
  );
};

export default Layout;
