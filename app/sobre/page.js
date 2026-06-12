import styles from './Sobre.module.css';

export default function SobrePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sobre o TechCatalog</h1>
      <div className={styles.content}>
        <p>
          O TechCatalog nasceu da paixão pela tecnologia e pelo design. Nossa missão é curar os melhores produtos de tecnologia, oferecendo uma experiência de visualização imersiva e interativa.
        </p>
        <p>
          Este projeto foi desenvolvido como parte de uma proposta acadêmica para demonstrar o domínio das tecnologias web mais modernas, incluindo Next.js, React e CSS Modules.
        </p>
        
        <section className={styles.values}>
          <div className={styles.valueCard}>
            <h3>Qualidade</h3>
            <p>Selecionamos apenas o que há de melhor no mercado global.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Inovação</h3>
            <p>Sempre à frente das tendências tecnológicas.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Design</h3>
            <p>Acreditamos que a forma e a função devem caminhar juntas.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
