import { useQuery } from "@tanstack/react-query";

const fetchRepo = async (repo: string) => {
  const res = await fetch(`http://localhost:3000/api/github/${repo}`, {
    method: "GET",
  });
  return res.json();
};

const useRepo = (repo: string) => {
  return useQuery<GithubRepo>(["repo", repo], () => fetchRepo(repo));
};

export { useRepo, fetchRepo };
