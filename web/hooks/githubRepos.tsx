import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "../utils/apiUrl";
import { fetchWrapper } from "../utils/fetchWrapper";

const fetchRepo = async (repo: string) => {
  return await fetchWrapper(`${apiUrl}/github/${repo}`);
};
const fetchRepos = async () => {
  return await fetchWrapper(`${apiUrl}/github`);
};
const fetchPinedRepos = async () => {
  return await fetchWrapper(`${apiUrl}/github/pinned`);
};

const useRepo = (repo: string) => {
  return useQuery<GithubRepo>(["repo", repo], () => fetchRepo(repo));
};
const useRepos = () => {
  return useQuery<GithubRepo[]>(["repos"], () => fetchRepos(), {
    staleTime: Infinity,
  });
};
const usePinnedRepos = () => {
  return useQuery<GithubRepo[]>(["repos"], () => fetchPinedRepos());
};

export { useRepo, fetchRepo, fetchRepos, useRepos, usePinnedRepos };
