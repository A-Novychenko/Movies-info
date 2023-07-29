import Image from "next/image";

import styles from "./moviePage.module.css";
import {getMovie} from "../actions/getMovie";
import {getTrendMovies} from "../actions/getTrendMovies";

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
        width={930}
        height={550}
      />

      <div className="card_descr">
        <div className={styles.info}>
          <p className={styles.movieRating}>{movie.vote_average?.toFixed(1)}</p>
          <p className={styles.releaseDate}>{movie.release_date}</p>
        </div>
        <div className={styles.overviewWrap}>
          <p className={styles.overview}>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const movies = await getTrendMovies();
  return movies.results.map((movie) => ({movieId: movie.id.toString()}));
}
