import { GetStaticPaths, GetStaticPropsContext, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import client from "../../client";
import { Post } from "./types";

interface PageProps {
  post: Post;
}

const Post: NextPage<PageProps> = ({ post }) => {
  return (
    <article>
      <h1>{post?.slug?.current}</h1>
    </article>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}

interface ISlug extends ParsedUrlQuery {
  slug: string;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params as ISlug;
  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      post,
    },
  };
}

export default Post;
