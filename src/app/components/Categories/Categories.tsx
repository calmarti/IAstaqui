import styles from './Categories.module.css';

interface Category {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Modelos (LLMs)",
    description: "Explora los últimos avances en modelos de lenguaje y sus aplicaciones",
    icon: "🤖"
  },
  {
    id: 2,
    title: "Agentes",
    description: "Descubre cómo los agentes autónomos están revolucionando la IA",
    icon: "🎯"
  },
  {
    id: 3,
    title: "Vibe coding",
    description: "Programación con estilo y las últimas tendencias en desarrollo",
    icon: "✨"
  },
  {
    id: 4,
    title: "Texto",
    description: "Procesamiento y generación de texto con tecnologías avanzadas",
    icon: "📝"
  },
  {
    id: 5,
    title: "Imagenes",
    description: "Generación y manipulación de imágenes con IA",
    icon: "🎨"
  },
  {
    id: 6,
    title: "Video",
    description: "Innovaciones en procesamiento y generación de video con IA",
    icon: "🎬"
  },
  {
    id: 7,
    title: "Audio",
    description: "Tecnologías de voz y audio potenciadas por IA",
    icon: "🎵"
  }
];

export default function Categories() {
  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Categorías</h2>
        <div className={styles.grid}>
          {categories.map(category => (
            <article key={category.id} className={styles.card}>
              <div className={styles.cardContent}>
                <span className={styles.icon}>{category.icon}</span>
                <h3 className={styles.title}>{category.title}</h3>
                <p className={styles.description}>{category.description}</p>
              </div>
              <div className={styles.hoverEffect}></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 