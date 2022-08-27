import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "../utils/apiUrl";

const fetchPosts = async () => {
  const res = await fetch(`${apiUrl}/post`, { method: "GET" });
  return res.json();
};

const fetchPost = async (slug: string) => {
  const res = await fetch(`${apiUrl}/post/${slug}`, {
    method: "GET",
  });
  console.log("Fething post");
  return res.json();
};

const usePosts = () => {
  return useQuery<Frontmatter[]>(["posts"], () => fetchPosts());
};
const usePost = (slug: string) => {
  return useQuery<Post>(["post", slug], () => fetchPost(slug));
};

export { usePosts, fetchPosts, fetchPost, usePost };
