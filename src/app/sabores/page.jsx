import styles from "@/app/sabores/sabores.module.css";
import Image from "next/image";
import sabor1 from "../../../public/sabor-oreo.png";
import sabor2 from "../../../public/sabor-pistache.png";
import sabor3 from "../../../public/sabor-cookies-avela.png";
import sabor4 from "../../../public/sorbet-kiwi.png";
import sabor5 from "../../../public/sorbet-morango.png";
import sabor6 from "../../../public/sorbet-limao.png";

export default function Sabores() {
  return (
    <main className={styles.main}>
      <section className={styles.secao_banner}>
        <div className={styles.texto_banner}>
          <h1>NOSSOS SABORES</h1>
        </div>
      </section>
      <section className={styles.secao_sabores}>
        <h2>SABORES DE SORVETE</h2>
        <div className={styles.container_cards}>
          <div className={styles.card_sabores}>
            <Image
              className={styles.imagem_sorvete}
              src={sabor1}
              alt="Sorvete sabor Oreo"
            />
            <h3>Sorvete de Cookies</h3>
            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
          </div>

          <div className={styles.card_sabores}>
            <Image
              className={styles.imagem_sorvete}
              src={sabor2}
              alt="Sorvete sabor pistache"
            />
            <h3>Sorvete de Pistache</h3>
            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
          </div>

          <div className={styles.card_sabores}>
            <Image
              className={styles.imagem_sorvete}
              src={sabor3}
              alt="Sorvete sabor Cookies & Avelã"
            />
            <h3>Cookies & Avelã</h3>
            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
          </div>

          <div className={styles.card_sabores}>
            <Image
              className={styles.imagem_sorvete}
              src={sabor4}
              alt="Sorvete sabor Kiwi"
            />
            <h3>Sorvete de Kiwi</h3>
            <p>
              Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C
            </p>
          </div>

          <div className={styles.card_sabores}>
            <Image
              className={styles.imagem_sorvete}
              src={sabor5}
              alt="Sorvete sabor Morango"
            />
            <h3>Sorvete de Morango</h3>
            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
          </div>

          <div className={styles.card_sabores}>
            <Image
              className={styles.imagem_sorvete}
              src={sabor6}
              alt="Sorvete sabor Limão Siciliano"
            />
            <h3>Sorvete de Limão Siciliano</h3>
            <p>
              O incrivel sorvete gourmet de limão siciliano vai te encantar.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
