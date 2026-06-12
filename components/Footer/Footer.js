import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>Catálogo Interativo de Produtos - Projeto de Programação Web I</p>
        <div className={styles.links}>
          <a href="/contato">Fale Conosco</a>
        </div>
      </div>
    </footer>
  );
}
