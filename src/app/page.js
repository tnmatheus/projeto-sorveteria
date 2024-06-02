import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.secao_banner}>
        <div className={styles.texto_banner}>
          <h1>Sorvete Artesanal</h1>
        </div>
      </section>
    </main>
  );
}
