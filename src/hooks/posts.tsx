import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "../utils/apiUrl";
import { fetchWrapper } from "../utils/fetchWrapper";

const fetchPosts = async () => {
  return await fetchWrapper(`${apiUrl}/post`);
};

const fetchPost = async (slug: string) => {
  return fetchWrapper(`${apiUrl}/post/${slug}`);
};

const usePosts = () => {
  return useQuery<Frontmatter[]>(["posts"], () => fetchPosts());
};
const usePost = (slug: string) => {
  return useQuery<Post>(["post", slug], () => fetchPost(slug));
};

export { usePosts, fetchPosts, fetchPost, usePost };
