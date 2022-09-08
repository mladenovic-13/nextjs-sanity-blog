import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_AUTH,
});

// Get all public GitHub repos
export const getAllGithubRepos = async () => {
  const response: any = await octokit.graphql(
    `query{ 
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
                  color
                }
              }
              createdAt
              url
              homepageUrl
              openGraphImageUrl
              isPrivate
              repositoryTopics(first:10) {
                nodes{
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
      }`
  );
  return response.viewer.repositories.nodes;
};

// Get pinned GitHub repos
export const getPinnedGithubRepos = async () => {
  const query = `query{
      viewer {
        pinnedItems(first:100,types:REPOSITORY ) {
          nodes{
            ... on Repository{
              name
              description
              languages(first:10){
                nodes{
                  name
                }
              }
              url
              homepageUrl
              openGraphImageUrl
            }
          }
        }
      }
    }`;
  const response: any = await octokit.graphql(query);
  return response.viewer.pinnedItems.nodes;
};
// Get single GitHub repo with README.md
export const getGithubRepo = async (name: string) => {
  const query = `query{
                  viewer {
                    repository(name: "${name}") {
                      name
                      owner {
                        login
                      }
                      url
                      homepageUrl
                      createdAt
                      languages(first:10){
                        nodes{
                          name
                          color
                        }
                      }
                      object(expression: "master:README.md") {
                        ... on Blob {
                          text
                        }
                      }
                    }
                  }
                }`;
  const response: any = await octokit.graphql(query);
  return response.viewer.repository;
};
