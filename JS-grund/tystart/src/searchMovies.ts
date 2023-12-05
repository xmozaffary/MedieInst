import { get } from "./service";

export const searchMovies = async (searchText) => {
    const url = `http://www.omdbapi.com/?apikey=7cc1e25&s=${searchText}`;
    const s = await get(url);
    return s
  }