import React from 'react';
import styles from './PostCard.module.css';

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

interface PostCardProps {
  post: Post;
  className?: string;
}

const PostCard: React.FC<PostCardProps> = ({ post, className = '' }) => {
  return (
    <article className={`${styles.post} ${className}`}>
      <div className={styles.postContent}>
        <span className={styles.category}>{post.category}</span>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.meta}>
          <span className={styles.date}>{post.date}</span>
          <span className={styles.readTime}>{post.readTime}</span>
        </div>
      </div>
      <div className={styles.hoverEffect}></div>
    </article>
  );
};

export default PostCard; 