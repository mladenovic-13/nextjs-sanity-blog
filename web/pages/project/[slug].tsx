import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import React, { ReactElement } from "react";
import { fetchRepo, fetchRepos, useRepo } from "../../hooks/githubRepos";
import md from "markdown-it";
import MainMask from "../../components/mask/MainMask";
import { NextPageWithLayout } from "../_app";
import Layout from "../../components/layout/Layout";

const Project: NextPageWithLayout = ({ slug }: any) => {
  const { data, isLoading, isSuccess } = useRepo(slug);
  const render = () => {
    if (isLoading) return <div>Loading...</div>;
    if (isSuccess)
      return (
        <main className="prose prose-invert prose-img:rounded-xl">
          <div
            dangerouslySetInnerHTML={{
              __html: md().render(data.object?.text || ""),
            }}
          />
        </main>
      );
  };
  return <>{render()}</>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await fetchRepos()).map((repo: GithubRepo) => ({
    params: { slug: repo.name },
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
  queryClient.prefetchQuery(["repo", slug], () => fetchRepo(slug));

  return {
    props: {
      slug,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

Project.getLayout = (page: ReactElement) => {
  return <Layout isProject>{page}</Layout>;
};

export default Project;
