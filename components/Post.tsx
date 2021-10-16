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
    <div className="card">
      {post.frontmatter.cover_image && (
        <img src={post.frontmatter.cover_image} alt="cover-image" />
      )}
      <div>Posted on {post.frontmatter.date}</div>

      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <button>Read more</button>
      </Link>
    </div>
  );
};

export default Post;
