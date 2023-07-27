const page = 1;
const API_KEY = "6b1b36ecf2f3f3c0d27307e18cbffcb3";
const BASE_URL = "https://api.themoviedb.org/3";
const URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`;

export const getTrendMovies = (): Promise<MoviesResponse> => {
  return fetch(URL, {next: {revalidate: 60}}).then((res) => res.json());
};
