import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps, NextPage } from 'next';
import { sortByDate } from '../../utils';
import BlogArticle from '../../components/blog/BlogArticle';
import { BlogArticleData } from '../../components/blog/BlogArticleData';
import { useState, type JSX } from 'react';
import Tag from '../../components/Tag';
import Head from 'next/head';

interface BlogProps {
  posts: BlogArticleData[];
}

const Blog: NextPage<BlogProps> = ({ posts }): JSX.Element => {
  const [filter, setFilter] = useState<string | null>(null);

  const setFilterTag = (tag: string): void => {
    if (filter === tag) {
      setFilter(null);
    } else {
      setFilter(tag);
    }
  };

  const tags = Array.from(
    new Set(posts.flatMap((post) => post.frontmatter.tags)),
  );

  const filteredBlogArticles = (): BlogArticleData[] =>
    filter
      ? posts.filter((post) => post.frontmatter.tags.includes(filter))
      : posts;

  return (
    <>
      <Head>
        <title>Blog | Florian Woelki</title>
      </Head>

      <div className="container mx-auto max-w-6xl break-words px-8 pt-24 pb-32 md:px-16 lg:pt-32">
        <h1 className="mt-4 text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-6 mb-1 text-sm text-gray-500">Filter by tags:</p>
        <ul className="flex flex-wrap">
          {tags.map((tag, index) => (
            <li key={index} onClick={() => setFilterTag(tag)}>
              <Tag selected={tag === filter}>{tag}</Tag>
            </li>
          ))}
        </ul>

        <ul className="mt-10 space-y-10 divide-y divide-gray-200 border-t border-gray-200">
          {filteredBlogArticles().map((post, index) => (
            <li key={index} className="pt-10">
              <BlogArticle
                post={post}
                onClickTag={(tag) => setFilterTag(tag)}
                selectedTag={filter}
              ></BlogArticle>
            </li>
          ))}
        </ul>
      </div>
    </>
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
      posts: posts.sort((a, b) =>
        sortByDate(a.frontmatter.date, b.frontmatter.date),
      ),
    },
  };
};

export default Blog;
