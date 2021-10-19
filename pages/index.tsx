import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post, { PostColor, PostData } from '../components/Post';
import { sortByDate } from '../utils';
import ChevronRightIcon from '../icons/chevron-right.svg';

interface HomeProps {
  posts: PostData[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  const latestThreeBlogs = posts.slice(0, 3);

  const blogArticleColorMapping: PostColor[] = ['red', 'yellow', 'green'];

  return (
    <>
      <div className="flex flex-col items-center justify-center py-40 space-y-2 bg-gray-900">
        <h1 className="text-4xl font-bold text-white">Florian Woelki</h1>
        <h2 className="text-xl text-gray-100">
          T-Shaped Fullstack Softwareengineer
        </h2>
      </div>

      <div className="container max-w-6xl px-8 pt-8 pb-32 mx-auto space-y-16 break-words lg:pt-16 md:px-16">
        <div>
          <h3 className="mb-6 text-3xl font-bold text-gray-900">
            Latest Blogs
          </h3>
          <div className="grid grid-cols-3 mb-8 gap-x-10">
            {latestThreeBlogs.map((post, index) => (
              <Post
                key={index}
                post={post}
                color={blogArticleColorMapping[index]}
              ></Post>
            ))}
          </div>
          <Link href="/blog" passHref>
            <a className="flex items-center space-x-1 text-gray-400 transition duration-100 ease-in-out hover:text-gray-500">
              <span>To all blog articles</span>
              <ChevronRightIcon className="w-4 h-4" />
            </a>
          </Link>
        </div>

        <div>
          <h3 className="mb-6 text-3xl font-bold text-gray-900">
            Latest Videos
          </h3>
          <p>Coming Soon</p>
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
