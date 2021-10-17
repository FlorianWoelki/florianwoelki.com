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
    <div className="space-y-2">
      <Link href={`/blog/${post.slug}`}>
        <h2 className="inline text-2xl font-bold tracking-tight cursor-pointer">
          {post.frontmatter.title}
        </h2>
      </Link>
      <p className="text-gray-500">{post.frontmatter.excerpt}</p>

      <div className="space-x-4 text-sm text-gray-400">
        <span>{post.frontmatter.date}</span>
        <span>
          {readingTime} {readingTime === 1 ? 'min' : 'mins'} read
        </span>
      </div>
    </div>
  );
};

export default Post;
