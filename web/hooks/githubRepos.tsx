import { useQuery } from "@tanstack/react-query";

const fetchRepo = async (repo: string) => {
  const res = await fetch(`http://localhost:3000/api/github/${repo}`, {
    method: "GET",
  });
  return res.json();
};
const fetchRepos = async () => {
  const res = await fetch(`http://localhost:3000/api/github`, {
    method: "GET",
  });
  return res.json();
};

const useRepo = (repo: string) => {
  return useQuery<GithubRepo>(["repo", repo], () => fetchRepo(repo));
};
const useRepos = () => {
  return useQuery<GithubRepo[]>(["repos"], () => fetchRepos());
};

export { useRepo, fetchRepo, fetchRepos, useRepos };
