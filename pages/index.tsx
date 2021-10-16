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
      <div className="flex flex-col items-center justify-center space-y-2 bg-gray-900 py-28">
        <h1 className="text-4xl font-bold text-white">Florian Woelki</h1>
        <h2 className="text-xl text-gray-100">
          T-Shaped Fullstack Softwareengineer
        </h2>
      </div>

      <div>
        {posts.map((post, index) => (
          <Post key={index} post={post}></Post>
        ))}
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
    const { data: frontmatter } = matter(markdownWithMeta);

    return { slug, frontmatter };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
};

export default Home;
