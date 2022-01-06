import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { classes } from '../../utils';
import Tag from '../Tag';
import { getReadingTime } from './BlogArticle';
import { BlogArticleData } from './BlogArticleData';

export type LatestBlogArticleColor = 'green' | 'yellow' | 'red';

interface LatestBlogArticleProps {
  post: BlogArticleData;
  color?: LatestBlogArticleColor;
}

const LatestBlogArticle: NextPage<LatestBlogArticleProps> = ({
  post,
  color,
}) => {
  const readingTime = getReadingTime(post.content);

  const colorClasses = classes(
    {
      'from-blue-500 to-emerald-500': color === 'green',
      'from-amber-500 to-red-500': color === 'red',
      'from-lime-500 to-yellow-500': color === 'yellow',
      'p-1 w-full lg:w-1/3': color !== undefined,
    },
    'cursor-pointer rounded-xl bg-gradient-to-tr transition duration-300 ease-in-out transform hover:scale-105',
  );

  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <a className={colorClasses}>
        <div
          className={`space-y-2 bg-white rounded-lg ${
            color ? 'p-6 flex flex-col justify-between h-full' : ''
          }`}
        >
          <div className="flex flex-col space-y-2">
            <h2 className="inline text-xl font-bold tracking-tight">
              {post.frontmatter.title}
            </h2>
            <p className="text-gray-500">{post.frontmatter.excerpt}</p>
          </div>

          <div className="space-y-2">
            <ul className="flex">
              {post.frontmatter.tags.map((tag) => (
                <li key={tag}>
                  <Tag selected={false}>{tag}</Tag>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>{post.frontmatter.date}</span>
              <span>
                {readingTime} {readingTime === 1 ? 'min' : 'mins'} read
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default LatestBlogArticle;
