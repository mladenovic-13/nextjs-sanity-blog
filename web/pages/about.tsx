import React, { ReactNode } from "react";
import MainLayout from "../components/layout/IndexLayout";
import MainMask from "../components/mask/MainMask";
import { NextPageWithLayout } from "./_app";

const AboutMe: NextPageWithLayout = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <MainMask />
      <div className="py-16">About Me</div>
    </div>
  );
};

AboutMe.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default AboutMe;
