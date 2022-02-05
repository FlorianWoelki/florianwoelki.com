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
  selectedTag: string | null;
  onClickTag?: (tag: string) => void;
}

interface TagListProps {
  post: BlogArticleData;
  className: string;
  selectedTag: string | null;
  onClickTag?: (tag: string) => void;
}

const TagList: NextPage<TagListProps> = ({
  className,
  post,
  onClickTag,
  selectedTag,
}): JSX.Element => {
  return (
    <ul className={className}>
      {post.frontmatter.tags.map((tag: string, i) => (
        <li key={i} onClick={() => (onClickTag ? onClickTag(tag) : () => {})}>
          <Tag selected={selectedTag === tag}>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
};

const BlogArticle: NextPage<BlogArticleProps> = ({
  post,
  ...rest
}): JSX.Element => {
  return (
    <article className="grid space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
      <div className="space-y-2">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium text-gray-500">
            <time dateTime={new Date(post.frontmatter.date).toString()}>
              {post.frontmatter.date}
            </time>
          </dd>
        </dl>

        <TagList className="hidden xl:flex" post={post} {...rest} />
      </div>
      <div className="space-y-5 xl:col-span-3">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">
            <Link href={`/blog/${post.slug}`} passHref>
              <a className="text-gray-900">{post.frontmatter.title}</a>
            </Link>
          </h2>
          <div className="max-w-none text-base text-gray-500">
            <p>{post.frontmatter.excerpt}</p>
          </div>
        </div>

        <TagList className="flex xl:hidden" post={post} {...rest} />

        <div className="text-base font-medium">
          <Link href={`/blog/${post.slug}`} passHref>
            <a className="inline-flex items-center space-x-2 text-gray-900 transition duration-100 ease-in-out hover:text-gray-700">
              <span>Read more</span>
              <ChevronRightIcon className="h-4 w-4"></ChevronRightIcon>
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogArticle;
