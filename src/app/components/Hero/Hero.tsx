import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.accentLine}></div>
        <div className={styles.accentLine}></div>
        <div className={styles.accentLine}></div>
        <div className={styles.accentDot}></div>
        <div className={styles.accentDot}></div>
        <div className={styles.accentDot}></div>
        <div className={styles.accentDot}></div>
        <div className={styles.accentDot}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.highlight}>IA</span>staqui
          </h1>
          <p className={styles.subtitle}>
            El vertiginoso mundo de la IA a tu alcance 
          </p>
          <blockquote className={styles.quote}>
            La IA no te quitará el trabajo, un tío que sabe usar la IA sí. 
          </blockquote>
          <span>Jensen Huang</span>
        </div>
      </div>
    </section>
  );
} 