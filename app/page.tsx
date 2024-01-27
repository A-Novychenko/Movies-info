import Link from "next/link";
import {MovieList} from "./components/MovieList/MovieList";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="com.nauticai://dashboard">TestLink</Link>
      <MovieList />
    </main>
  );
}
