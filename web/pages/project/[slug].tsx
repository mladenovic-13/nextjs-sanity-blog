import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { fetchRepo, fetchRepos, useRepo } from "../../hooks/githubRepos";

interface IProps {
  slug: string;
}

const Project: NextPage<IProps> = ({ slug }) => {
  const { data, isLoading, isSuccess } = useRepo(slug);
  const render = () => {
    if (isLoading) return <div>Loading...</div>;
    if (isSuccess)
      return (
        <div>
          <h1>{data.name}</h1>
          <h1>{data.languages.nodes[0].name}</h1>
          <h1>{data.languages.nodes[0].color}</h1>
          <h1>{data.owner.login}</h1>
          <h1>{data.createdAt.toString()}</h1>
          <h1>{data.object?.text}</h1>
        </div>
      );
  };
  return <div className="text-black">{render()}</div>;
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
