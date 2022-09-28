import React, { ReactNode } from "react";
import Contact from "../components/forms/Contact";
import MainLayout from "../components/layout/IndexLayout";
import MainMask from "../components/mask/MainMask";
import SocialLinks from "../components/social/SocialLinks";
import { NextPageWithLayout } from "./_app";
import { socialLinks } from "../utils/data";
import Head from "next/head";

const ContactPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Mladenovic13 - Contact</title>
        <meta
          name="description"
          content="I’m interested in freelance opportunities – incredibly ambitious or
        large projects. However, don’t hesitate to use the form if you have
        other requests or questions."
        />
      </Head>
      <div className="lg:py-6 center h-screen bg-slate-900">
        <MainMask />
        <div className="flex flex-col justify-evenly items-center w-5/6 h-[90%]">
          <Contact />
          <SocialLinks {...socialLinks} />
        </div>
      </div>
    </>
  );
};

ContactPage.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default ContactPage;
