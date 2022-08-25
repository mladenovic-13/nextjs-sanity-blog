import { NextApiRequest, NextApiResponse } from "next";
import { getPinnedGithubRepos } from "../../../utils/getGithubRepos";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<GithubRepo[] | string>
) => {
  try {
    const data: GithubRepo[] = await getPinnedGithubRepos();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};
export default handler;
