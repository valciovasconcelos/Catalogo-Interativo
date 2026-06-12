import styles from './Contato.module.css';

export default function ContatoPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Entre em Contato</h1>
      <p className={styles.subtitle}>Dúvidas ou sugestões? Envie uma mensagem para nossa equipe.</p>
      
      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Seu nome completo" />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="seu@email.com" />
        </div>
        <div className={styles.field}>
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" rows="5" placeholder="Como podemos ajudar?"></textarea>
        </div>
        <button type="submit" className={styles.submitBtn}>Enviar Mensagem</button>
      </form>
    </div>
  );
}
