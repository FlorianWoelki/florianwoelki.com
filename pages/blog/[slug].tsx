import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import ChevronLeftIcon from '../../icons/chevron-left.svg';
// @ts-ignore
import darkStyle from 'highlight.js/styles/atom-one-dark.css';
import styles from './[slug].module.css';

interface BlogPostProps {
  frontmatter: { [key: string]: string };
  slug: string;
  content: string;
}

const BlogPost: NextPage<BlogPostProps> = ({
  frontmatter: { title, date },
  content,
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

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
};

export default BlogPost;
