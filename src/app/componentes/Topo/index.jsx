import Logo from "../../../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/componentes/Topo/Topo.module.css";

export default function Topo() {
  return (
    <header className={styles.topo}>
      <Image src={Logo} />
      <nav>
        <Link href="/">Home</Link>
        <Link href="/sabores">Sabores</Link>
        <Link href="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}
