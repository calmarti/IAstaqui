import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>  
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.highlight}>IA</span>staqui
          </h1>
          <p className={styles.subtitle}>
           Tu guía para sobrevivir la revolución de la IA 
          </p>
          <blockquote className={styles.quote}>
            La IA no te quitará el trabajo, lo hará alguien que la sepa usar
            <span className={styles.spanInQuote}>Jensen Huang</span>
          </blockquote>
         
        </div>
      </div>
    </section>
  );
} 