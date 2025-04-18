
export interface Post {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    content: string;
    image?: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    slug: string;
  }

  export interface PostCardProps {
    post: Post;
    className?: string;
  }