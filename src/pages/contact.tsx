import React, { ReactNode } from "react";
import MainLayout from "../components/layout/IndexLayout";
import MainMask from "../components/mask/MainMask";
import { NextPageWithLayout } from "./_app";

const Contact: NextPageWithLayout = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <MainMask />
      <div className="py-16">Contact Page</div>
    </div>
  );
};

Contact.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Contact;
