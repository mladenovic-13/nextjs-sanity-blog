import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { fetchRepo, fetchRepos, useRepo } from "../../hooks/githubRepos";
import md from "markdown-it";
import MainMask from "../../components/mask/MainMask";

interface IProps {
  slug: string;
}

const Project: NextPage<IProps> = ({ slug }) => {
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
  return (
    <div className="bg-slate-900 flex justify-center">
      <MainMask />
      {render()}
    </div>
  );
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

export default Project;
