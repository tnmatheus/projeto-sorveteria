import styles from "@/app/componentes/Rodape/Rodape.module.css";
import Image from "next/image";
import Logo from "../../../../public/logo.png";

export default function Rodape() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container_footer}>
        <Image className={styles.logo_rodape} src={Logo} />
        <div className={styles.card_textos}>
          <h2>ENDEREÇO</h2>
          <p>Av. Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        <div className={styles.card_textos}>
          <h2>CONTATO</h2>
          <p>info@meusite.com</p>
          <p>Telefone: (11) 1234-5678</p>
        </div>
        <div className={styles.card_textos}>
          <h2>HORÁRIOS</h2>
          <p>Aberto todos os dias: </p>
          <p>8h às 18h</p>
        </div>
      </div>
      <p>Gelateria. Orgulhosamente desenvolvido por Matheus Teodoro</p>
    </footer>
  );
}
