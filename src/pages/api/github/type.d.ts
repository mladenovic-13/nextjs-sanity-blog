type GithubRepo = {
  name: string;
  owner: { login: string };
  description: string | null;
  languages: {
    nodes: [
      {
        name: string;
        color: string;
      }
    ];
  };
  createdAt: Date;
  url: string;
  homepageUrl: string | null;
  object?: {
    text: string;
  };
  openGraphImageUrl?: string;
  isPrivate: boolean;
  repositoryTopics: {
    nodes: [
      {
        topic: {
          name: string;
        };
      }
    ];
  };
};
