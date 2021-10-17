import { NextPage } from 'next';
import Link from 'next/link';

export interface PostData {
  slug: string;
  frontmatter: {
    [key: string]: string;
  };
}

interface PostProps {
  post: any;
}

const Post: NextPage<PostProps> = ({ post }) => {
  return (
    <div className="space-y-2">
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-2xl font-bold tracking-tight cursor-pointer">
          {post.frontmatter.title}
        </h2>
      </Link>
      <p className="text-gray-500">{post.frontmatter.excerpt}</p>

      <div className="space-x-4 text-sm text-gray-400">
        <span>{post.frontmatter.date}</span>
        <span>4 mins read</span>
      </div>
    </div>
  );
};

export default Post;
