import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
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
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: (code, lang) => {
      const hljs = require('highlight.js');
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
    langPrefix: 'hljs language-',
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
  });
  marked.use({
    renderer: {
      image(
        this: any,
        href: string | null,
        _: string | null,
        text: string,
      ): string {
        return `<div class="flex flex-col mt-2"><img src="${href}" alt="${text}" class="mx-auto"><p class="text-gray-400 italic text-sm mx-auto">${text}</p></div>`;
      },
    },
  });

  return (
    <div className="container max-w-6xl px-8 pt-8 pb-32 mx-auto break-words lg:pt-32 md:px-16">
      <Link href="/blog" passHref>
        <a className="inline-flex items-center space-x-1 text-gray-400 transition duration-100 ease-in-out hover:text-gray-500">
          <ChevronLeftIcon className="w-4 h-4" />
          <span>Go back</span>
        </a>
      </Link>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-1 mb-16 text-gray-500">Posted on {date}</p>

      <div
        className={styles.markdown}
        style={darkStyle}
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></div>

      <div className="grid grid-cols-2 py-4 mt-24 text-center divide-x rounded shadow">
        <div className="px-12 py-4">
          <p className="mb-4 tracking-wide text-gray-400 uppercase">
            Next Article
          </p>
          {nextPost ? (
            <>
              <Link href={`/blog/${nextPost.slug}`} passHref>
                <a className="text-xl">{nextPost.frontmatter.title}</a>
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
          <p className="mb-4 tracking-wide text-gray-400 uppercase text">
            Previous Article
          </p>
          {previousPost ? (
            <>
              <Link href={`/blog/${previousPost?.slug}`} passHref>
                <a className="text-lg">
                  {previousPost?.frontmatter.title ??
                    'Seems like you have reached the end of the blog articles.'}
                </a>
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

    return { slug, frontmatter, content };
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
