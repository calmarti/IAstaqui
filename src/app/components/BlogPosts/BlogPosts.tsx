import styles from './BlogPosts.module.css';
import PostCard from '../PostCard/PostCard';
import { posts } from '../../data/data';

export default function BlogPosts() {
  return (
    <section id="articulos" className={styles.blogPosts}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Últimos Artículos</h2>
        <div className={styles.grid}>
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
} 