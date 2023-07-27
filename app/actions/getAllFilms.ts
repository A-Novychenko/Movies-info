import {FilmResponse} from "../types/types";

export function getAllFilms(): Promise<FilmResponse> {
  return fetch("https://swapi.dev/api/films").then((res) => res.json());
}
