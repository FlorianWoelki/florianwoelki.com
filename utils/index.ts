import { PostData } from '../components/Post';

export const sortByDate = (a: PostData, b: PostData): number => {
  return (
    new Date(b.frontmatter.date).getDate() -
    new Date(a.frontmatter.date).getDate()
  );
};
