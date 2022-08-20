import Image from "next/image";
import React from "react";
import BlogPostCard from "../cards/BlogPostCard";
import { PostCard } from "./type";

const blogPosts: PostCard[] = [
  {
    title: "Title",
    desc: "This is some random blog post description. Doesn't mean anything.",
    imgURL:
      "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000",
    postURL: "",
  },
  {
    title: "Title",
    desc: "This is some random blog post description. Doesn't mean anything.",
    imgURL:
      "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000",
    postURL: "",
  },
  {
    title: "Title",
    desc: "This is some random blog post description. Doesn't mean anything.",
    imgURL:
      "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000",
    postURL: "",
  },
];

const PostsList = () => {
  return (
    <div className="flex flex-col justify-evenly w-full px-10   text-primary-900">
      <h2 className="mb-2 text-center text-xl text-primary-100 font-extralight">
        Latest blog posts
      </h2>
      <div className="h-full flex flex-col justify-between">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </div>
      <p className="mt-3 mb-2 underline underline-offset-8 text-primary-100 font-light tracking-widest text-center animate-bounce">
        View More &gt;
      </p>
    </div>
  );
};

export default PostsList;
