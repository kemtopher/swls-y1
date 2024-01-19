import Image from "next/image";
import TitleScene from "./sections/title-scene";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <TitleScene />
    </main>
  );
}
