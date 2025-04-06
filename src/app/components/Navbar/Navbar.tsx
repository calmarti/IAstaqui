import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>IA</span>
          <span className={styles.logoSubtext}>staqui</span>
        </div>
        <div className={styles.links}>
          <a href="/" className={styles.link}>Inicio</a>
          <a href="/categorias" className={styles.link}>Categorías</a>
          <a href="/tutoriales" className={styles.link}>Tutoriales</a>
        </div>
      </div>
    </nav>
  );
} 