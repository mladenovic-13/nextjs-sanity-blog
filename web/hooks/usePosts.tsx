import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("http://localhost:3000/api/post", { method: "GET" });
  return res.json();
};

const fetchPost = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/post/${slug}`, {
    method: "GET",
  });
  return res.json();
};

const usePosts = () => {
  return useQuery<Frontmatter[]>(["posts"], () => fetchPosts());
};
const usePost = (slug: string) => {
  return useQuery<Post[]>(["post", slug], () => fetchPost(slug));
};

export { usePosts, fetchPosts, fetchPost, usePost };
