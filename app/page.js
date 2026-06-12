import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Inovação na ponta dos seus dedos.</h1>
        <p className={styles.subtitle}>
          Descubra os wearables, eletrônicos e acessórios mais desejados do momento com curadoria exclusiva TechCatalog.
        </p>
        <div className={styles.actions}>
          <Link href="/produtos" className={styles.primaryBtn}>
            Ver Catálogo
          </Link>
          <Link href="/sobre" className={styles.secondaryBtn}>
            Conheça Nossa História
          </Link>
        </div>
      </div>
      <div className={styles.heroImage}>
        {/* Placeholder for a cool abstract tech shape */}
        <div className={styles.abstractShape}></div>
      </div>
    </div>
  );
}
