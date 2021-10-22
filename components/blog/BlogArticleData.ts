export interface BlogArticleData {
  slug: string;
  content: string;
  frontmatter: {
    [key: string]: string;
  };
}
