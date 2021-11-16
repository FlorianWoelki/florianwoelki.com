import { NextPage } from 'next';
import Link from 'next/link';
import { BlogArticleData } from './BlogArticleData';
import ChevronRightIcon from '../../icons/chevron-right.svg';
import Tag from '../Tag';

export const getReadingTime = (content: string): number => {
  const wpm = 225;
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wpm);
  return readingTime;
};

interface BlogArticleProps {
  post: BlogArticleData;
}

const BlogArticle: NextPage<BlogArticleProps> = ({ post }): JSX.Element => {
  return (
    <article className="grid space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
      <div className="space-y-2">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium text-gray-500">
            <time dateTime={new Date(post.frontmatter.date).toString()}>
              {post.frontmatter.date}
            </time>
          </dd>
        </dl>
        <ul className="flex">
          {post.frontmatter.tags.map((tag: string) => (
            <li>
              <Tag selected={false}>{tag}</Tag>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-5 xl:col-span-3">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">
            <Link href={`/blog/${post.slug}`} passHref>
              <a className="text-gray-900">{post.frontmatter.title}</a>
            </Link>
          </h2>
          <div className="text-base text-gray-500 max-w-none">
            <p>{post.frontmatter.excerpt}</p>
          </div>
        </div>
        <div className="text-base font-medium">
          <Link href={`/blog/${post.slug}`} passHref>
            <a className="inline-flex items-center space-x-2 text-gray-900 transition duration-100 ease-in-out hover:text-gray-700">
              <span>Read more</span>
              <ChevronRightIcon className="w-4 h-4"></ChevronRightIcon>
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogArticle;
