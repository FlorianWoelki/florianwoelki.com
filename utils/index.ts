import { BlogArticleData } from '../components/blog/BlogArticleData';

export const sortByDate = (a: BlogArticleData, b: BlogArticleData): number => {
  return (
    new Date(b.frontmatter.date).getMilliseconds() -
    new Date(a.frontmatter.date).getMilliseconds()
  );
};

export const classes = (
  dynamic: Record<string, boolean>,
  classes: string = '',
): string => {
  return Object.entries(dynamic)
    .filter((entry) => entry[1])
    .map((entry) => entry[0])
    .join(' ')
    .concat(' ')
    .concat(classes);
};
