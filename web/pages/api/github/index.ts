import { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit";
import { getAllGithubRepos } from "../../../utils/getGithubRepos";

const octokit = new Octokit({
  auth: process.env.GITHUB_AUTH,
});

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<GithubRepo[] | string>
) => {
  try {
    const data: GithubRepo[] = await getAllGithubRepos();
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
  }
};

export default handler;
