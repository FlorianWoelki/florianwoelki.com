import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import ChevronLeftIcon from '../../icons/chevron-left.svg';
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
  return (
    <div className="container max-w-6xl px-8 pt-8 pb-32 mx-auto break-words lg:pt-32 md:px-16">
      <Link href="/" passHref>
        <a className="inline-block">
          <ChevronLeftIcon className="w-5 h-5 text-gray-400" />
        </a>
      </Link>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-1 mb-16 text-gray-600">Posted on {date}</p>

      <div
        className={styles.markdown}
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
