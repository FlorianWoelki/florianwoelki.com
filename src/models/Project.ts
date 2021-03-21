import ProjectType from './ProjectTag';

export type ProjectModel = {
  title: string;
  link: string;
  linkTitle: string;
  tags: ProjectType[];
  description: string;
};
