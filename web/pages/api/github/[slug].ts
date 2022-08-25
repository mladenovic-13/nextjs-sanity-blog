import { NextApiRequest, NextApiResponse } from "next";
import { getGithubRepo } from "../../../utils/getGithubRepos";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<GithubRepo | string>
) => {
  const { slug } = req.query;
  try {
    const data: GithubRepo = await getGithubRepo(slug as string);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};
export default handler;
