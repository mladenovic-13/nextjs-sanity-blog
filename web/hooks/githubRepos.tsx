import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "../utils/apiUrl";
import { fetchWrapper } from "../utils/fetchWrapper";

const fetchRepo = async (repo: string) => {
  return await fetchWrapper(`${apiUrl}/github/${repo}`);
  // const res = await fetch(`${apiUrl}/github/${repo}`, {
  //   method: "GET",
  // });
  // return res.json();
};
const fetchRepos = async () => {
  return await fetchWrapper(`${apiUrl}/github`);
  // const res = await fetch(`${apiUrl}/github`, {
  //   method: "GET",
  // });
  // return res.json();
};

const useRepo = (repo: string) => {
  return useQuery<GithubRepo>(["repo", repo], () => fetchRepo(repo));
};
const useRepos = () => {
  return useQuery<GithubRepo[]>(["repos"], () => fetchRepos());
};

export { useRepo, fetchRepo, fetchRepos, useRepos };
