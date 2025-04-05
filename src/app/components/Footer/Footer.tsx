import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>
              <span className={styles.logoText}>IA</span>
              <span className={styles.logoSubtext}>staqui</span>
            </h2>
            <p className={styles.description}>
              Explorando el futuro de la inteligencia artificial, un artículo a la vez
            </p>
          </div>
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Contenido</h3>
              <a href="/articulos" className={styles.link}>Artículos</a>
              <a href="/categorias" className={styles.link}>Categorías</a>
              <a href="/tutoriales" className={styles.link}>Tutoriales</a>
            </div>
            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Sobre Nosotros</h3>
              <a href="/about" className={styles.link}>Quiénes Somos</a>
              <a href="/contact" className={styles.link}>Contacto</a>
              <a href="/newsletter" className={styles.link}>Newsletter</a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2024 IAstaqui. Todos los derechos reservados.</p>
          <div className={styles.social}>
            <a href="https://twitter.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://github.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 