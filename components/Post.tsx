import { NextPage } from 'next';
import Link from 'next/link';

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
  color: PostColor;
}

const Post: NextPage<PostProps> = ({ post, color }) => {
  const wpm = 225;
  const words = post.content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wpm);

  const classes = (dynamic: Record<any, any>, classes = '') => {
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
    },
    'p-1 cursor-pointer rounded-xl bg-gradient-to-tr',
  );

  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <a>
        <div className={colorClasses}>
          <div className="p-6 space-y-2 bg-white rounded-lg">
            <h2 className="inline text-xl font-bold tracking-tight">
              {post.frontmatter.title}
            </h2>
            <p className="text-gray-500">{post.frontmatter.excerpt}</p>

            <div className="space-x-4 text-sm text-gray-400">
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

export default Post;
