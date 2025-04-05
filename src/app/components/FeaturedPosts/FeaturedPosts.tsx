import styles from './FeaturedPosts.module.css';

// Featured posts data
const featuredPosts = [
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
  return (
    <section className={styles.featuredPosts}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Artículos Destacados</h2>
        <div className={styles.grid}>
          {featuredPosts.map(post => (
            <article key={post.id} className={styles.post}>
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
          ))}
        </div>
      </div>
    </section>
  );
} 