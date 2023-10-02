import Link from "next/link";
import Image from "next/image";

import {getTrendMovies} from "@/app/actions/getTrendMovies";

import styles from "./MovieList.module.css";

export const MovieList = async () => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500/";

  const movies = await getTrendMovies();

  return (
    <div className={styles.filmListWrap}>
      <ul className={styles.filmList}>
        {movies.results.map((movie) => {
          const imgUrl = IMG_URL + movie.poster_path;

          return (
            <li className={styles.film} key={movie.id}>
              <Link href={`/${movie.id}`}>
                <Image
                  src={imgUrl}
                  alt={movie.original_title}
                  width={330}
                  height={450}
                />

                <h3 className={styles.title}>{movie.title}</h3>

                <div className="card_descr">
                  <div className={styles.info}>
                    <p className="card_rating">
                      {movie.vote_average?.toFixed(1)}
                    </p>
                    <p>{movie.release_date}</p>
                  </div>

                  <div className={styles.overviewWrap}>
                    <p className={styles.overview}>{movie.overview}</p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
