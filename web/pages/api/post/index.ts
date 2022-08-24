import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import matter from "gray-matter";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Frontmatter[]>
) => {
  const postsDir = path.join(process.cwd(), "posts");
  const files = await fs.readdir(postsDir);
  let postsFrontmatters: Frontmatter[] = [];
  try {
    await Promise.all(
      files.map(async (filename) => {
        const slug = filename.replace(".md", "");
        const file = await fs.readFile(`posts/${filename}`, "utf-8");
        const { data } = matter(file);
        const frontmatter = data as Frontmatter;
        postsFrontmatters.push(frontmatter);
      })
    );
  } catch (error) {
    return res.status(500);
  }

  res.status(200).json(postsFrontmatters);
};

export default handler;
