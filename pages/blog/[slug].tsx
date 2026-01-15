import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { BlogArticleData } from '../../components/blog/BlogArticleData';
import ChevronLeftIcon from '../../icons/chevron-left.svg';
// @ts-ignore
import darkStyle from 'highlight.js/styles/atom-one-dark.css';
import styles from './[slug].module.css';

interface BlogPostProps {
  frontmatter: { [key: string]: string };
  slug: string;
  content: string;
  previousPost: BlogArticleData | null;
  nextPost: BlogArticleData | null;
}

const BlogPost: NextPage<BlogPostProps> = ({
  frontmatter: { title, date },
  content,
  previousPost,
  nextPost,
}) => {
  const marked = new Marked(
    markedHighlight({
      emptyLangClass: 'hljs',
      langPrefix: 'hljs language-',
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      },
    }),
  );
  marked.use({
    renderer: {
      image({ href, text }) {
        return `<div class="flex flex-col mt-2"><img src="${href}" alt="${text}" class="mx-auto"><p class="text-gray-400 italic text-sm mx-auto">${text}</p></div>`;
      },
    },
    gfm: true,
    breaks: false,
  });

  return (
    <div className="container mx-auto max-w-6xl break-words px-8 pt-8 pb-32 md:px-16 lg:pt-32">
      <Link
        href="/blog"
        passHref
        className="inline-flex items-center space-x-1 text-gray-400 transition duration-100 ease-in-out hover:text-gray-500"
      >
        <ChevronLeftIcon className="h-4 w-4" />
        <span>Go back</span>
      </Link>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-1 mb-16 text-gray-500">Posted on {date}</p>
      <div
        className={styles.markdown}
        style={darkStyle}
        dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
      ></div>
      <div className="mt-24 grid divide-x rounded py-4 text-center shadow md:grid-cols-2">
        <div className="px-12 py-4">
          <p className="mb-4 uppercase tracking-wide text-gray-400">
            Next Article
          </p>
          {nextPost ? (
            <>
              <Link
                href={`/blog/${nextPost.slug}`}
                passHref
                className="text-xl"
              >
                {nextPost.frontmatter.title}
              </Link>
              <p className="mt-2 text-sm text-gray-700">
                {nextPost.frontmatter.excerpt}
              </p>
            </>
          ) : (
            <p className="italic">
              Seems like you have reached the end of the blog posts
            </p>
          )}
        </div>
        <div className="px-12 py-4">
          <p className="text mb-4 uppercase tracking-wide text-gray-400">
            Previous Article
          </p>
          {previousPost ? (
            <>
              <Link
                href={`/blog/${previousPost?.slug}`}
                passHref
                className="text-lg"
              >
                {previousPost?.frontmatter.title ??
                  'Seems like you have reached the end of the blog articles.'}
              </Link>
              <p className="text-sm text-gray-700">
                {previousPost?.frontmatter.excerpt}
              </p>
            </>
          ) : (
            <p className="italic">
              Seems like you have reached the end of the blog posts
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('content'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async (
  context,
) => {
  const slug = context.params!.slug as string;
  const markdownWithMeta = fs.readFileSync(
    path.join('content', `${slug}.md`),
    'utf-8',
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const files = fs.readdirSync(path.join('content'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('content', filename),
      'utf-8',
    );
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return { slug, frontmatter, content } as BlogArticleData;
  });

  let previousPost: BlogArticleData | null = null;
  let nextPost: BlogArticleData | null = null;
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].slug === slug) {
      previousPost = posts[i + 1] ?? null;
      nextPost = posts[i - 1] ?? null;
    }
  }

  return {
    props: {
      frontmatter,
      slug,
      content,
      previousPost,
      nextPost,
    },
  };
};

export default BlogPost;
