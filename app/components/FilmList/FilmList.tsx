import {getTrendMovies} from "@/app/actions/getTrendMovies";
import Image from "next/image";

import styles from "./FilmList.module.css";

export const FilmList = async () => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500/";

  const movies = await getTrendMovies();
  //   console.log("movies", movies);

  return (
    <ul className={styles.filmList}>
      {movies.results.map((movie) => {
        const imgUrl = IMG_URL + movie.poster_path;
        return (
          <li className={styles.film} key={movie.id}>
            {/* <div className="card-wrapper"> */}
            <Image
              src={imgUrl}
              alt={movie.original_title}
              width={330}
              height={450}
            />
            {/* </div> */}

            <h3 className={styles.title}>{movie.title}</h3>
            <div className="card_descr">
              <div className={styles.info}>
                <p className="card_rating">{movie.vote_average?.toFixed(1)}</p>
                <p>{movie.release_date}</p>
              </div>
              <div className={styles.overviewWrap}>
                <p className={styles.overview}>{movie.overview}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
// // import {getAllFilms} from "@/app/actions/getAllFilms";
// import {getTrendMovies} from "@/app/actions/getTrendMovies";
// import Image from "next/image";

// export const FilmList = async () => {
//   const IMG_URL = "https://image.tmdb.org/t/p/w500/";

//   // const allFilms = await getAllFilms();
//   const movies = await getTrendMovies();
//   console.log("movies", movies);

//   return (
//     // <ul>
//     //   {allFilms.results.map((film) => (
//     //     <li key={film.url}>
//     //       <h2>{film.title}</h2>
//     //       <p>{film.director}</p>
//     //     </li>
//     //   ))}
//     // </ul>
//     <ul>
//       {movies.results.map((movie) => {
//         const imgUrl = IMG_URL + movie.poster_path;
//         return (
//           <li className="movie__item" key={movie.id}>
//             <div className="card-wrapper">
//               <Image
//                 src={imgUrl}
//                 // src={movie.poster_path}
//                 alt={movie.original_title}
//                 width={200}
//                 height={300}
//               />
//             </div>

//             <h3 className="card_title">{movie.title}</h3>
//             <div className="card_descr">
//               {/* <p className="card_genres">
//                 ${finalGenres.join(", ")}&nbsp;|&nbsp;${movie.release_date}
//               </p> */}
//               <p className="card_rating">{movie.vote_average?.toFixed(1)}</p>
//               <p>{movie.release_date}</p>
//               <p>{movie.overview}</p>
//             </div>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
