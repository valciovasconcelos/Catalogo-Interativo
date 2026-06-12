import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} TechCatalog. Todos os direitos reservados.</p>
        <div className={styles.links}>
          <a href="#">Privacidade</a>
          <a href="#">Termos</a>
        </div>
      </div>
    </footer>
  );
}
