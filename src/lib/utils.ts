import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/app/types/posts';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(postsDirectory);
  const posts = files
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(postsDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      
      return {
        slug: file.replace(/\.mdx$/, ''),
        ...(data as Omit<Post, 'slug'>),
      } as Post;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(post => post.category === category);
}