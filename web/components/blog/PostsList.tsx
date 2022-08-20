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
    <div className="list__cards">
      <div className="space__cards text-primary-900">
        <h2 className="section__heading text-primary-100">Latest blog posts</h2>
        {blogPosts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
        <p className="view__more text-primary-100">View More &gt;</p>
      </div>
    </div>
  );
};

export default PostsList;
