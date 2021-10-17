import type { GetStaticProps, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post, { PostData } from '../components/Post';
import { sortByDate } from '../utils';

interface HomeProps {
  posts: PostData[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-32 space-y-2 bg-gray-900">
        <h1 className="text-4xl font-bold text-white">Florian Woelki</h1>
        <h2 className="text-xl text-gray-100">
          T-Shaped Fullstack Softwareengineer
        </h2>
      </div>

      <div className="container max-w-6xl px-8 pt-8 pb-32 mx-auto break-words lg:pt-16 md:px-16">
        <h1 className="mb-6 text-xl text-gray-400">Latest Blogs</h1>
        <div className="grid grid-cols-2 gap-y-16">
          {posts.map((post, index) => (
            <Post key={index} post={post}></Post>
          ))}
        </div>
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
      posts: posts.sort(sortByDate),
    },
  };
};

export default Home;
