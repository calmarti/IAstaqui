import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PostCard.module.css';
import { PostCardProps } from '../../types/posts';

const PostCard: React.FC<PostCardProps> = ({ post, className = '' }) => {
  return (
    <article className={`${styles.post} ${className}`}>
      {post.image && (
        <div className={styles.imageContainer}>
          <Image
            src={post.image.src}
            alt={post.image.alt}
            width={post.image.width}
            height={post.image.height}
            className={styles.image}
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className={styles.postContent}>
        <span className={styles.category}>{post.category}</span>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>
          {post.excerpt}
          <Link href={`/blog/${post.slug}`} className={styles.readMore}>
            ... Leer más
          </Link>
        </p>
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