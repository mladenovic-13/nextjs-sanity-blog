import React from "react";
import Navbar from "../navbar/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
