import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import md from "markdown-it";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import { fetchPost, fetchPosts, usePost, usePosts } from "../../hooks/posts";
import { NextPageWithLayout } from "../_app";

// The page for each post
const Post: NextPageWithLayout = ({ slug }: any) => {
  const { data, isSuccess, isLoading, error } = usePost(slug);

  const render = () => {
    if (isLoading) return <div>Loading</div>;
    if (error) return <div>Error</div>;
    if (isSuccess)
      return (
        <main className="prose prose-invert prose-img:rounded-xl lg:max-w-4xl">
          <div
            dangerouslySetInnerHTML={{
              __html: md().render(data.content || ""),
            }}
          />
        </main>
      );
  };
  return <>{render()}</>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await fetchPosts()).map((post: Frontmatter) => ({
    params: { slug: post.slug },
  }));
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
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["post", slug], () => fetchPost(slug));

  return {
    props: {
      slug,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

Post.getLayout = function getLayout(page: ReactElement) {
  return <Layout isPost>{page}</Layout>;
};
export default Post;
