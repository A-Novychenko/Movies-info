import Image from "next/image";

import styles from "./moviePage.module.css";
import {getMovie} from "../actions/getMovie";

interface Params {
  params: {movieId: number};
}

export default async function Movie({params: {movieId}}: Params) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500/";

  const movie = await getMovie(movieId);

  const imgUrl = IMG_URL + movie.backdrop_path;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{movie.title}</h3>
      <Image
        className={styles.poster}
        src={imgUrl}
        alt={movie.original_title}
        width={500}
        height={280}
      />

      <div className="card_descr">
        <div className={styles.info}>
          <p className="card_rating">{movie.vote_average?.toFixed(1)}</p>
          <p>{movie.release_date}</p>
        </div>
        <div className={styles.overviewWrap}>
          <p className={styles.overview}>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
