import { IOmdbResponse } from "../models/IOmdbReesponse";
import { get } from "./serviceBase";

export const searchMovie = async (): Promise<IOmdbResponse> => {
  const input = document.getElementById("input") as HTMLInputElement;
  const getInput = input.value;
  const url = `http://www.omdbapi.com/?apikey=7cc1e25&s=${getInput}`;
  const d = await get<IOmdbResponse>(url);
  return d;
};
