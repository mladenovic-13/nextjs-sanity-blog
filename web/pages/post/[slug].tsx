import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";

// The page for each post

const Post = ({ frontmatter, content }: any) => {
  const { title, author, category, date, bannerImage, tags } = frontmatter;
  return (
    <div className="flex justify-center">
      <main className="prose">
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </main>
    </div>
  );
};

export const getStaticPaths = async () => {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  // Return list of paths
  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);

  return {
    props: {
      frontmatter,
      content,
    },
  };
};

export default Post;
