import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import matter from "gray-matter";

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Post>
) => {
  const { slug } = req.query;
  const postsDir = path.join(process.cwd(), "posts");
  const file = await fs.readFile(`posts/${slug}.md`, "utf-8");
  const { data, content } = matter(file);
  const frontmatter = data as Frontmatter;

  res.status(200).json({ frontmatter, content });
};

export default handler;
