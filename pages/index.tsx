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
import { BlogArticleData } from '../components/blog/BlogArticleData';
import CountUpBubble from '../components/CountUpBubble';
import talks from '../assets/talks.json';
import Talk, { TalkColor } from '../components/talks/Talk';
import { useEffect, useState } from 'react';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { YouTubeVideo, YouTubeVideoData } from '../components/YouTubeVideo';

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

  const talkColorMapping: TalkColor[] = ['green', 'blue', 'yellow'];

  const sortedTalks = talks.sort((a, b) => sortByDate(a.date, b.date));

  const [latestVideos, setLatestVideos] = useState<YouTubeVideoData[]>([]);

  useEffect(() => {
    const channelURL = encodeURIComponent(
      `https://www.youtube.com/feeds/videos.xml?channel_id=UC18qytfIhR9cNEjUcgGLl3A`,
    );
    const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;
    fetch(reqURL)
      .then((res) => res.json())
      .then((res) => setLatestVideos(res.items.splice(0, 3)));
  }, []);

  return (
    <div className="container max-w-6xl px-8 pb-32 mx-auto space-y-20 break-words md:px-16">
      <div className="space-y-12 text-center mt-28 lg:grid lg:grid-cols-2 lg:items-center lg:space-y-0 lg:text-left">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-gray-900">Florian Woelki</h1>
          <h2 className="text-xl text-gray-800">
            <span>
              Fullstack Softwareengineer with special interest
              <br />
              in Machine Learning, Golang, and Rust
            </span>
          </h2>
        </div>

        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <CountUpBubble
            link="https://www.youtube.com/c/CodemitFloW"
            title="YouTube Views"
            amount={500000}
            color="green"
          />
          <CountUpBubble
            link="https://github.com/FlorianWoelki?tab=repositories"
            title="Repositories"
            amount={42}
            color="blue"
          />
          <CountUpBubble
            link="https://github.com/FlorianWoelki/florianwoelki.com/raw/master/pdf/resume.pdf"
            title="Years of Experience"
            amount={4}
            color="purple"
          />
        </div>
      </div>
      {/* <div>
        <h3 className="mb-6 text-3xl font-bold text-gray-900">Latest Blogs</h3>
        <div className="flex flex-col gap-10 mb-6 lg:flex-row">
          {latestThreeBlogs.map((post, index) => (
            <LatestBlogArticle
              key={index}
              post={post}
              color={blogArticleColorMapping[index]}
            ></LatestBlogArticle>
          ))}
        </div>
        <Link
          href="/blog"
          passHref
          className="inline-flex items-center space-x-1 text-gray-400 transition duration-100 ease-in-out hover:text-gray-500">

          <span>To all blog articles</span>
          <ChevronRightIcon className="w-4 h-4" />

        </Link>
      </div> */}
      <div>
        <h3 className="mb-6 text-3xl font-bold text-gray-900">Latest Videos</h3>
        {latestVideos.length === 0 ? (
          <LoadingSpinner loading={true} className="w-6 h-6" />
        ) : (
          <>
            <div className="flex flex-col gap-10 mb-6 lg:flex-row">
              {latestVideos.map((post, index) => (
                <YouTubeVideo key={index} data={post}></YouTubeVideo>
              ))}
            </div>
            <Link
              href="https://youtube.com/channel/UC18qytfIhR9cNEjUcgGLl3A"
              passHref
              className="inline-flex items-center space-x-1 text-gray-400 transition duration-100 ease-in-out hover:text-gray-500"
              target="_blank"
            >
              <span>To all videos</span>
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </>
        )}
      </div>
      <div>
        <h3 className="mb-6 text-3xl font-bold text-gray-900">My Talks</h3>
        <div className="flex flex-col gap-10 mb-6 lg:flex-row">
          {sortedTalks.map((talk, i) => (
            <Talk
              key={talk.title}
              title={talk.title}
              description={talk.description}
              date={talk.date}
              link={talk.link}
              color={talkColorMapping[i]}
            />
          ))}
        </div>
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
      posts: posts.sort((a, b) =>
        sortByDate(a.frontmatter.date, b.frontmatter.date),
      ),
    },
  };
};

export default Home;
