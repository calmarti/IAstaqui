import Image from 'next/image';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import { getAllPosts } from '@/lib/utils';
import styles from './page.module.css';

// Helper function to get post content
async function getPostContent(slug: string) {
  const filePath = path.join(process.cwd(), 'src/content/posts', `${slug}.md`);
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContent);
    return content;
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);
  
  if (!post) return {};

  return {
    title: `${post.title} | Iastaqui`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  const content = await getPostContent(params.slug);

  if (!content) {
    notFound();
  }

  return (
    <article className={styles.article}>
      {post.image && (
        <div className={styles.heroImage}>
          <Image
            src={post.image.src}
            alt={post.image.alt}
            width={1200}
            height={630}
            priority
            className={styles.image}
          />
        </div>
      )}
      <header>
        <h1>{post.title}</h1>
        <div className={styles.meta}>
          <span>{post.category}</span>
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </header>
      <div className={styles.content}>
        <Markdown
          options={{
            overrides: {
              img: {
                component: Image,
                props: {
                  className: styles.contentImage,
                  width: 800,
                  height: 400,
                },
              },
            },
          }}
        >
          {content}
        </Markdown>
      </div>
    </article>
  );
} 