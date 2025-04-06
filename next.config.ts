import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import type { NextConfig } from "next";

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  /* config options here */
};

export default withMDX(nextConfig);
