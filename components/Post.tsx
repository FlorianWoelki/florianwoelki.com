import { NextPage } from 'next';
import Link from 'next/link';

export interface PostData {
  slug: string;
  content: string;
  frontmatter: {
    [key: string]: string;
  };
}

interface PostProps {
  post: PostData;
}

const Post: NextPage<PostProps> = ({ post }) => {
  const wpm = 225;
  const words = post.content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wpm);

  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <a>
        <div className="p-1 cursor-pointer rounded-xl bg-gradient-to-tr from-blueGray-500 to-emerald-500">
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
