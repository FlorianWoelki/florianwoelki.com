import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

interface BlogPostProps {
  frontmatter: { [key: string]: string };
  slug: string;
  content: string;
}

const BlogPost: NextPage<BlogPostProps> = ({
  frontmatter: { title, date, cover_image },
  content,
}) => {
  return (
    <>
      <Link href="/">
        <a>Go back</a>
      </Link>
      <h1>{title}</h1>
      <div>Posted on {date}</div>
      {cover_image && <img src={cover_image} />}
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </>
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
