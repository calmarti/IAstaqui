import styles from './BlogPosts.module.css';

// Blog posts data
const posts = [
  {
    id: 1,
    title: "GPT-4: Un análisis profundo de sus capacidades",
    excerpt: "Explorando las nuevas características y limitaciones del modelo más avanzado de OpenAI",
    category: "Análisis",
    date: "5 de Abril, 2024",
    readTime: "8 min"
  },
  {
    id: 2,
    title: "Claude 3: El nuevo competidor en el mercado de LLMs",
    excerpt: "Anthropic presenta su modelo más capaz hasta la fecha",
    category: "Noticias",
    date: "4 de Abril, 2024",
    readTime: "5 min"
  },
  {
    id: 3,
    title: "Construyendo aplicaciones con LangChain",
    excerpt: "Una guía práctica para desarrollar aplicaciones basadas en LLMs",
    category: "Tutoriales",
    date: "3 de Abril, 2024",
    readTime: "12 min"
  },
  {
    id: 4,
    title: "Gemini Pro: La apuesta de Google por los LLMs",
    excerpt: "Análisis de las capacidades y limitaciones del modelo multimodal de Google",
    category: "Análisis",
    date: "2 de Abril, 2024",
    readTime: "7 min"
  },
  {
    id: 5,
    title: "Fine-tuning: Personalizando LLMs para casos específicos",
    excerpt: "Guía paso a paso para adaptar modelos de lenguaje a tus necesidades",
    category: "Tutoriales",
    date: "1 de Abril, 2024",
    readTime: "15 min"
  },
  {
    id: 6,
    title: "El impacto de los LLMs en la educación",
    excerpt: "Cómo los modelos de lenguaje están transformando la enseñanza y el aprendizaje",
    category: "Aplicaciones",
    date: "31 de Marzo, 2024",
    readTime: "10 min"
  },
  {
    id: 7,
    title: "Prompt Engineering: El arte de comunicarse con LLMs",
    excerpt: "Técnicas avanzadas para obtener mejores resultados de los modelos de lenguaje",
    category: "Técnico",
    date: "30 de Marzo, 2024",
    readTime: "9 min"
  },
  {
    id: 8,
    title: "Mistral AI: El nuevo jugador en el mercado de LLMs",
    excerpt: "Análisis del modelo Mistral y su impacto en el ecosistema de IA",
    category: "Noticias",
    date: "29 de Marzo, 2024",
    readTime: "6 min"
  },
  {
    id: 9,
    title: "LLMs en la atención médica: Oportunidades y desafíos",
    excerpt: "Cómo los modelos de lenguaje están revolucionando la medicina",
    category: "Aplicaciones",
    date: "28 de Marzo, 2024",
    readTime: "11 min"
  },
  {
    id: 10,
    title: "Vectorización de texto: Fundamentos para RAG",
    excerpt: "Entendiendo los embeddings y su importancia en los sistemas de recuperación",
    category: "Técnico",
    date: "27 de Marzo, 2024",
    readTime: "8 min"
  },
  {
    id: 11,
    title: "El futuro de los asistentes virtuales con LLMs",
    excerpt: "Evolución y tendencias en el desarrollo de asistentes conversacionales",
    category: "Tendencias",
    date: "26 de Marzo, 2024",
    readTime: "7 min"
  },
  {
    id: 12,
    title: "Evaluación de LLMs: Métricas y metodologías",
    excerpt: "Cómo medir el rendimiento y la calidad de los modelos de lenguaje",
    category: "Técnico",
    date: "25 de Marzo, 2024",
    readTime: "13 min"
  },
  {
    id: 13,
    title: "LLMs en el desarrollo de software",
    excerpt: "Cómo los modelos de lenguaje están transformando la programación",
    category: "Aplicaciones",
    date: "24 de Marzo, 2024",
    readTime: "9 min"
  },
  {
    id: 14,
    title: "Sesgos en los LLMs: Identificación y mitigación",
    excerpt: "Estrategias para abordar los prejuicios en los modelos de lenguaje",
    category: "Ética",
    date: "23 de Marzo, 2024",
    readTime: "10 min"
  },
  {
    id: 15,
    title: "Integración de LLMs en aplicaciones móviles",
    excerpt: "Guía práctica para implementar modelos de lenguaje en apps",
    category: "Tutoriales",
    date: "22 de Marzo, 2024",
    readTime: "12 min"
  },
  {
    id: 16,
    title: "El mercado de los LLMs: Análisis de la competencia",
    excerpt: "Panorama actual de los principales proveedores y sus modelos",
    category: "Análisis",
    date: "21 de Marzo, 2024",
    readTime: "8 min"
  },
  {
    id: 17,
    title: "LLMs para la generación de contenido creativo",
    excerpt: "Aplicaciones de los modelos de lenguaje en el arte y la creatividad",
    category: "Aplicaciones",
    date: "20 de Marzo, 2024",
    readTime: "7 min"
  },
  {
    id: 18,
    title: "Optimización de costos en el uso de LLMs",
    excerpt: "Estrategias para reducir gastos al implementar modelos de lenguaje",
    category: "Técnico",
    date: "19 de Marzo, 2024",
    readTime: "9 min"
  },
  {
    id: 19,
    title: "Privacidad y seguridad en aplicaciones con LLMs",
    excerpt: "Consideraciones para proteger datos al usar modelos de lenguaje",
    category: "Seguridad",
    date: "18 de Marzo, 2024",
    readTime: "11 min"
  },
  {
    id: 20,
    title: "LLMs en el análisis financiero",
    excerpt: "Cómo los modelos de lenguaje están transformando las finanzas",
    category: "Aplicaciones",
    date: "17 de Marzo, 2024",
    readTime: "8 min"
  },
  {
    id: 21,
    title: "El futuro de los LLMs: Tendencias para 2025",
    excerpt: "Predicciones sobre la evolución de los modelos de lenguaje",
    category: "Tendencias",
    date: "16 de Marzo, 2024",
    readTime: "10 min"
  },
  {
    id: 22,
    title: "Implementación de chatbots con LLMs",
    excerpt: "Guía paso a paso para crear asistentes conversacionales efectivos",
    category: "Tutoriales",
    date: "15 de Marzo, 2024",
    readTime: "14 min"
  },
  {
    id: 23,
    title: "Regulación de los LLMs: Estado actual y perspectivas",
    excerpt: "Análisis de las políticas y regulaciones sobre modelos de lenguaje",
    category: "Legal",
    date: "14 de Marzo, 2024",
    readTime: "9 min"
  },
  {
    id: 24,
    title: "LLMs para la investigación científica",
    excerpt: "Aplicaciones de los modelos de lenguaje en la ciencia y la investigación",
    category: "Aplicaciones",
    date: "13 de Marzo, 2024",
    readTime: "8 min"
  }
];

export default function BlogPosts() {
  return (
    <section className={styles.blogPosts}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Últimos Artículos</h2>
        <div className={styles.grid}>
          {posts.map(post => (
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