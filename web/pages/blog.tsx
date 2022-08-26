import React from "react";
import { fetchPosts, usePosts } from "../hooks/posts";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

const Blog = () => {
  const { data, isLoading, error } = usePosts();

  return (
    <main className="text-black">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data &&
        data.map((postFrontmatter: Frontmatter) => (
          <>
            <h1>{postFrontmatter.title}</h1>
          </>
        ))
      )}
    </main>
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

export default Blog;
