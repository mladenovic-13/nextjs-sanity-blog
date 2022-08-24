import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import { NextPageWithLayout } from "../_app";

// The page for each post
const Post: NextPageWithLayout = ({ frontmatter, content }: any) => {
  const { title, author, category, date, bannerImage, tags } = frontmatter;
  return (
    <div className="">
      <main className="prose prose-invert prose-img:rounded-xl">
        <div
          dangerouslySetInnerHTML={{
            __html: md().render(content),
          }}
        />
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

Post.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Post;
