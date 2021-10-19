import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

export interface PostData {
  slug: string;
  content: string;
  frontmatter: {
    [key: string]: string;
  };
}

export type PostColor = 'green' | 'yellow' | 'red';

interface PostProps {
  post: PostData;
  color?: PostColor;
}

const Post: NextPage<PostProps> = ({ post, color }) => {
  const wpm = 225;
  const words = post.content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wpm);

  const classes = (
    dynamic: Record<string, boolean>,
    classes: string = '',
  ): string => {
    return Object.entries(dynamic)
      .filter((entry) => entry[1])
      .map((entry) => entry[0])
      .join(' ')
      .concat(' ')
      .concat(classes);
  };

  const colorClasses = classes(
    {
      'from-blueGray-500 to-emerald-500': color === 'green',
      'from-amber-500 to-red-500': color === 'red',
      'from-lime-500 to-yellow-500': color === 'yellow',
      'p-1 w-full md:w-1/3': color !== undefined,
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

          <div className="space-x-4 text-sm text-gray-400">
            <span>{post.frontmatter.date}</span>
            <span>
              {readingTime} {readingTime === 1 ? 'min' : 'mins'} read
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Post;
