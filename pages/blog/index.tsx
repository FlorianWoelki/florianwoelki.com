import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps, NextPage } from 'next';
import { sortByDate } from '../../utils';
import BlogArticle from '../../components/blog/BlogArticle';
import { BlogArticleData } from '../../components/blog/BlogArticleData';

interface BlogProps {
  posts: BlogArticleData[];
}

const Blog: NextPage<BlogProps> = ({ posts }): JSX.Element => {
  return (
    <div className="container max-w-6xl px-8 pt-24 pb-32 mx-auto break-words lg:pt-32 md:px-16">
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Blog</h1>

      <ul className="mt-10 space-y-10 border-t border-gray-200 divide-y divide-gray-200">
        {posts.map((post, index) => (
          <li key={index} className="pt-10">
            <BlogArticle post={post}></BlogArticle>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join('content'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('content', filename),
      'utf-8',
    );
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return { slug, frontmatter, content };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
};

export default Blog;
