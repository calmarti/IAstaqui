declare module '*.mdx' {
    import type { ReactElement } from 'react';
    export const metadata: {
      title: string;
      excerpt: string;
      category: string;
      date: string;
      readTime: string;
      image?: {
        src: string;
        alt: string;
      };
    };
    export default function MDXContent(): ReactElement;
  }