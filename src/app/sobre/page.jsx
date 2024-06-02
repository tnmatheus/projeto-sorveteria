import styles from "@/app/sobre/Sobre.module.css";
import Image from "next/image";
import imagem1 from "../../../public/sobre-image.jpg";
import imagem2 from "../../../public/sorveteria.jpg";

export default function Sabores() {
  return (
    <main className={styles.main}>
      <section className={styles.secao_banner}>
        <div className={styles.texto_banner}>
          <h1> A GELATERIA</h1>
        </div>
      </section>

      <section className={styles.secao_sobre}>
        <div className={styles.container_textos}>
          <h2>Sobre Nós</h2>
          <span>Nós simpliesmente amamos sorvete!</span>
          <p>
            Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
            sorvete produzido. Fazemos o melhor sorvete para os nossos clientes
            e gostamos de receber elogios. Estamos operando desde 2009 com as
            melhores matérias-primas para a produção final do sorvete. Vendemos
            tanto para varejo como para atacado.
          </p>
          <p>
            Nossos clientes podem comprar os nossos sorvetes e degustar na nossa
            loja ou levar para sua residência e aproveitar junto com a família.
            Também vendemos para estabelecimentos e criamos eventos como festa
            de aniversário, formaturas e eventos empresariais. Para contratar os
            nossos serviços, basta entrar em contato conosco. Iremos
            proporcionar o melhor atendimento e os melhores produtos para você
            fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
          </p>
        </div>
        <div className={styles.imagens_sobre}>
          <Image className={styles.imagem} src={imagem1} alt="Imagem 1" />
          <Image className={styles.imagem} src={imagem2} alt="Imagem 1" />
        </div>
      </section>
    </main>
  );
}
