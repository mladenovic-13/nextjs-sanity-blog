import React, { ReactElement, ReactNode } from "react";
import { fetchPosts, usePosts } from "../hooks/posts";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import MainMask from "../components/mask/MainMask";
import BlogPostCard from "../components/cards/BlogPostCard";
import { NextPageWithLayout } from "./_app";
import MainLayout from "../components/layout/IndexLayout";
import Projects from "./projects";

const Blog: NextPageWithLayout = () => {
  const { data } = usePosts();

  return (
    <div className="w-full min-h-screen py-12 lg:py-16 bg-slate-900">
      <MainMask />
      <h1 className="section__heading mb-6">Blog Posts</h1>
      <div
        className="w-full flex items-center gap-6 flex-col 
                   lg:w-[95%] lg:flex-row lg:flex-wrap lg:justify-center lg:mx-auto"
      >
        {data?.map((post) => (
          <div className=" w-[80%] h-52 lg:w-[30%] lg:h-52" key={post.title}>
            {/* <BlogPostCard
              
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

// Generating the static props for the blog page
export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["posts"], () => fetchPosts());

  // Return the pages static props
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
Blog.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Blog;
