export function getAllFilms(): Promise<FilmResponse> {
  return fetch("https://swapi.dev/api/films").then((res) => res.json());
}
