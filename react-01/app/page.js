import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>

      <header className={styles.header}>
        <h1>Meu site</h1>
        <p>Estou aprendendo HTML, React e CSS</p>
      </header>

      <main className={styles.main}>

        <section className={styles.card}>
          <h2>Olá, tudo bem?</h2>

          <p>
            Este é um site simples para eu aprender como o CSS funciona.
          </p>

          <button className={styles.button}>
            Clique aqui
          </button>
        </section>

        <section className={styles.card}>
          <h2>Escolha uma opção</h2>

          <select className={styles.select}>
            <option>HTML</option>
            <option>CSS</option>
            <option>JavaScript</option>
            <option>React</option>
            <option>Next.js</option>
          </select>
        </section>

        <section className={styles.card}>
          <h2>Minha lista</h2>

          <ul>
            <li>Aprender HTML</li>
            <li>Aprender CSS</li>
            <li>Aprender JavaScript</li>
            <li>Aprender React</li>
          </ul>
        </section>

      </main>

      <footer className={styles.footer}>
        <p>Meu primeiro projeto</p>
      </footer>

    </div>
  );
}