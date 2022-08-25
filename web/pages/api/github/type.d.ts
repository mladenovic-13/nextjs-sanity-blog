type ResponseType = {
  name: string;
  owner: { login: string };
  description: string | null;
  languages: { nodes: string[] };
  createdAt: Date;
  url: string;
};
