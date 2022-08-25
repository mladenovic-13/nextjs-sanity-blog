import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_AUTH,
});

export const getGithubRepos = async () => {
  const query = `query{ 
      viewer {
        repositories(last:100){
          nodes {
            name
            owner{
              login
            }
            description
            languages(first:5){
              nodes{
                name
                
              }
            }
            createdAt
            url
          }
        }
      }
    }`;
  const response: any = await octokit.graphql(query);
  return response.viewer.repositories.nodes;
};
