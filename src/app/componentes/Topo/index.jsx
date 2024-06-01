import Logo from "../../../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/componentes/Topo/Topo.module.css";

export default function Topo() {
  return (
    <header className={styles.topo}>
      <Image className={styles.logo} src={Logo} />
      <nav>
        <Link className={styles.link_home} href="/">
          Home
        </Link>
        <Link className={styles.link_sabores} href="/sabores">
          Sabores
        </Link>
        <Link className={styles.link_sobre} href="/sobre">
          Sobre
        </Link>
      </nav>
    </header>
  );
}
