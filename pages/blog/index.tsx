import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps, NextPage } from 'next';
import { sortByDate } from '../../utils';
import Post, { PostData } from '../../components/Post';

interface BlogProps {
  posts: PostData[];
}

const Blog: NextPage<BlogProps> = ({ posts }): JSX.Element => {
  return (
    <div className="container max-w-6xl px-8 pt-8 pb-32 mx-auto break-words lg:pt-32 md:px-16">
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Blog</h1>

      <div className="grid grid-cols-2 mt-12 gap-y-12">
        {posts.map((post, index) => (
          <div key={index}>
            <Post post={post}></Post>
          </div>
        ))}
      </div>
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
