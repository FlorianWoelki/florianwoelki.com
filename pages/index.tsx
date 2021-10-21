import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post, { PostColor, PostData } from '../components/Post';
import { sortByDate } from '../utils';
import ChevronRightIcon from '../icons/chevron-right.svg';
import GithubIcon from '../icons/github.svg';
import LinkedinIcon from '../icons/linkedin.svg';

interface HomeProps {
  posts: PostData[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  const latestThreeBlogs = posts.slice(0, 3);

  const blogArticleColorMapping: PostColor[] = ['red', 'yellow', 'green'];

  return (
    <>
      <div className="container max-w-6xl px-8 pb-32 mx-auto space-y-16 break-words md:px-16">
        <div className="grid grid-cols-2 mb-20 space-y-4 mt-28">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-gray-900">Florian Woelki</h1>
            <h2 className="text-xl text-gray-800">
              <span>Fullstack Softwareengineer with special interest</span>
              <span>in AI, Blockchain, and data</span>
            </h2>
          </div>

          <ul className="flex flex-col justify-self-end">
            <li>
              <a
                href="#"
                target="_blank"
                className="flex items-center space-x-2"
              >
                <span>/FlorianWoelki</span>
                <GithubIcon className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="flex items-center space-x-2"
              >
                <span>/FlorianWoelki</span>
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-3xl font-bold text-gray-900">
            Latest Blogs
          </h3>
          <div className="flex flex-col gap-10 mb-6 md:flex-row">
            {latestThreeBlogs.map((post, index) => (
              <Post
                key={index}
                post={post}
                color={blogArticleColorMapping[index]}
              ></Post>
            ))}
          </div>
          <Link href="/blog" passHref>
            <a className="inline-flex items-center space-x-1 text-gray-400 transition duration-100 ease-in-out hover:text-gray-500">
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
