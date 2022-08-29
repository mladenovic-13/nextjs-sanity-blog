import React from "react";
import Navbar from "../navbar/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute top-0 w-full">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
