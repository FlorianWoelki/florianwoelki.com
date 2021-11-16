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

  return (
    <div className="container max-w-6xl px-8 pb-32 mx-auto space-y-20 break-words md:px-16">
      <div className="space-y-12 text-center lg:text-left lg:grid lg:items-center lg:grid-cols-2 mt-28 lg:space-y-0">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-gray-900">Florian Woelki</h1>
          <h2 className="text-xl text-gray-800">
            <span>
              Fullstack Softwareengineer with special interest
              <br />
              in AI, Blockchain, and data
            </span>
          </h2>
        </div>

        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <CountUpBubble
            link="https://www.youtube.com/c/CodemitFloW"
            title="YouTube Views"
            amount={300000}
            color="green"
          />
          <CountUpBubble
            link="https://github.com/FlorianWoelki?tab=repositories"
            title="Repositories"
            amount={42}
            color="blue"
          />
          <CountUpBubble
            link="https://github.com/FlorianWoelki/florianwoelki.com/raw/master/pdf/new_resume.pdf"
            title="Years of Experience"
            amount={4}
            color="purple"
          />
        </div>
      </div>

      <div>
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
        <Link href="/blog" passHref>
          <a className="inline-flex items-center space-x-1 text-gray-400 transition duration-100 ease-in-out hover:text-gray-500">
            <span>To all blog articles</span>
            <ChevronRightIcon className="w-4 h-4" />
          </a>
        </Link>
      </div>

      <div>
        <h3 className="mb-6 text-3xl font-bold text-gray-900">Latest Videos</h3>
        <p>Coming Soon</p>
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
