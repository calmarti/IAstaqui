"use client";
import { useState, useEffect } from 'react';
import styles from './FeaturedPosts.module.css';
import PostCard, { Post } from '../PostCard/PostCard';
import postStyles from '../PostCard/PostCard.module.css';

// Featured posts data
const featuredPosts: Post[] = [
  {
    id: 1,
    title: "El futuro de los LLMs en la industria",
    excerpt: "Cómo los modelos de lenguaje están transformando los procesos empresariales y la toma de decisiones",
    category: "Tendencias",
    date: "6 de Abril, 2024",
    readTime: "10 min"
  },
  {
    id: 2,
    title: "RAG: Mejorando la precisión de los LLMs",
    excerpt: "Técnicas de Recuperación Aumentada de Generación para reducir alucinaciones",
    category: "Técnico",
    date: "5 de Abril, 2024",
    readTime: "7 min"
  },
  {
    id: 3,
    title: "Ética en la IA: Desafíos actuales",
    excerpt: "Reflexiones sobre el desarrollo responsable de sistemas de IA avanzados",
    category: "Ética",
    date: "4 de Abril, 2024",
    readTime: "9 min"
  }
];

export default function FeaturedPosts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredPosts.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredPosts.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className={styles.featuredPosts}>
      <div className={styles.container}>           
        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {featuredPosts.map(post => (
              <PostCard key={post.id} post={post} className={postStyles.carouselPost} />
            ))}
          </div>
          
          <button 
            className={`${styles.carouselButton} ${styles.prevButton}`} 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <button 
            className={`${styles.carouselButton} ${styles.nextButton}`} 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          
          <div className={styles.carouselIndicators}>
            {featuredPosts.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 