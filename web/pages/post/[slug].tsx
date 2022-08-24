import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import { fetchPost, usePost, usePosts } from "../../hooks/usePosts";
import { NextPageWithLayout } from "../_app";

// The page for each post
const Post: NextPageWithLayout = ({ slug }: any) => {
  const { data, isSuccess, isLoading, error } = usePost(slug);

  const render = () => {
    if (isLoading) return <div>Loading</div>;
    if (error) return <div>Error</div>;
    if (isSuccess)
      return (
        <div className="">
          <main className="prose prose-invert prose-img:rounded-xl">
            <div
              dangerouslySetInnerHTML={{
                __html: md().render(data.content),
              }}
            />
          </main>
        </div>
      );
  };
  return <>{render()}</>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
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
  return <Layout>{page}</Layout>;
};
export default Post;
