import { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit";
import { getGithubRepos } from "../../../utils/getGithubRepos";

const octokit = new Octokit({
  auth: process.env.GITHUB_AUTH,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await getGithubRepos();
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
  }
};

export default handler;
