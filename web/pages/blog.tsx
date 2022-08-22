import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

// interface IPost {
//   title: string;
//   author: string;
//   category: string;
//   date: Date;
//   bannerImage: string;
//   tags: string[];
// }

// interface IBlog {
//   posts: IPost[];
// }

const Blog = ({ posts }: any) => {
  return (
    <main>
      {posts.map((post: any) => {
        const { slug, frontmatter } = post;
        const { title, author, category, date, bannerImage, tags } =
          frontmatter;

        return (
          <article key={title}>
            <Link href={`/posts/${slug}`}>
              <h1>{title}</h1>
            </Link>
            <h3>{author}</h3>
            <h3>{date}</h3>
          </article>
        );
      })}
    </main>
  );
};

// Generating the static props for the blog page
export const getStaticProps = async () => {
  // get list of files from the posts folder
  const files = fs.readdirSync("posts");

  // get frontmatter and slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // Return the pages static props
  return {
    props: {
      posts,
    },
  };
};

export default Blog;
