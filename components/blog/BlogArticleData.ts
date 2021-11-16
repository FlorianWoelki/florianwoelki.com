export interface BlogArticleData {
  slug: string;
  content: string;
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
    excerpt: string;
  };
}
