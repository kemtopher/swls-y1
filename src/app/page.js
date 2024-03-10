import Image from "next/image";
import TitleScene from "./sections/title-scene";
import IntroScene from "./sections/intro-scene";
import NscScene from "./sections/nsc-scene";
import FilmScene from "./sections/film-scene";
import FoodScene from "./sections/food-scene";
import NoSsr from './components/no-ssr';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <NoSsr>
        <TitleScene />
        <IntroScene />
        {/* <FoodScene /> */}
        {/* <NscScene /> */}
        <FilmScene />
      </NoSsr>
    </main>
  );
}
