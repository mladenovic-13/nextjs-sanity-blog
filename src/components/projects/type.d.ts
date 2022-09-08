interface ProjectCardProps {
  title: string;
  desc: string;
  stack?: string[];
  githubLink: string;
  demoLink: string;
  isProjectPage?: boolean;
  openGraphImageUrl: string | null;
}
