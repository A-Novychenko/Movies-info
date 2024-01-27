import {MovieList} from "./components/MovieList/MovieList";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <a href="com.nauticai://dashboard">TestLink<a/>
      <MovieList />
    </main>
  );
}
