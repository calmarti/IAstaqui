import Hero from './components/Hero/Hero';
import FeaturedPosts from './components/FeaturedPosts/FeaturedPosts';
import BlogPosts from './components/BlogPosts/BlogPosts';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedPosts />
      <BlogPosts />
      <Footer />
    </main>
  );
}
