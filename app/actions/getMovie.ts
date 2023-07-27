const API_KEY = "6b1b36ecf2f3f3c0d27307e18cbffcb3";
const BASE_URL = "https://api.themoviedb.org/3";

export const getMovie = (movie_id: number): Promise<MovieResponse> => {
  const URL = `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`;

  return fetch(URL).then((res) => res.json());
};
