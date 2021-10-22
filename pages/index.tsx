import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import LatestBlogArticle, {
  LatestBlogArticleColor,
} from '../components/blog/LatestBlogArticle';
import { sortByDate } from '../utils';
import ChevronRightIcon from '../icons/chevron-right.svg';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import PhyPlane from '../components/threejs/PhyPlane';
import PhyBox from '../components/threejs/PhyBox';
import { BlogArticleData } from '../components/blog/BlogArticleData';

interface HomeProps {
  posts: BlogArticleData[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  const latestThreeBlogs = posts.slice(0, 3);

  const blogArticleColorMapping: LatestBlogArticleColor[] = [
    'red',
    'yellow',
    'green',
  ];

  const randomHeight = Math.random() * 7 + 5;

  return (
    <>
      <div className="container max-w-6xl px-8 pb-32 mx-auto space-y-16 break-words md:px-16">
        <div className="grid items-center grid-cols-2 mb-20 space-y-4 mt-28">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-gray-900">Florian Woelki</h1>
            <h2 className="text-xl text-gray-800">
              <span>Fullstack Softwareengineer with special interest</span>
              <span>in AI, Blockchain, and data</span>
            </h2>
          </div>

          <Canvas
            style={{ height: 250, width: '100%' }}
            camera={{ position: [0, 0, 0], near: 0.8, far: 1000 }}
            className="justify-self-center"
          >
            <Physics gravity={[0, -10, 0]}>
              <PhyPlane
                color="white"
                position={[0, -2, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <PhyPlane color="white" position={[0, 0, -10]} />
              <PhyPlane
                color="white"
                position={[-6, 0, -10]}
                rotation={[0, 0, 0]}
              />
              <PhyPlane
                color="white"
                position={[6, 0, -10]}
                rotation={[0, 0, 0]}
              />

              <PhyBox position={[0, randomHeight - 3, -5]} />
              {[...Array(10)].map((_, i) => (
                <PhyBox
                  key={i}
                  position={[
                    Math.random() * (Math.random() * -2 + 1),
                    randomHeight + 5 * i,
                    -5,
                  ]}
                />
              ))}
            </Physics>

            <ambientLight intensity={1000} />

            <pointLight intensity={2} position={[5, 0, 5]} />
          </Canvas>
        </div>

        <div>
          <h3 className="mb-6 text-3xl font-bold text-gray-900">
            Latest Blogs
          </h3>
          <div className="flex flex-col gap-10 mb-6 md:flex-row">
            {latestThreeBlogs.map((post, index) => (
              <LatestBlogArticle
                key={index}
                post={post}
                color={blogArticleColorMapping[index]}
              ></LatestBlogArticle>
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
