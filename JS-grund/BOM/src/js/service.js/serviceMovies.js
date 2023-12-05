import { get } from "./service";

export const search = async (movieForm) => {
  const url = `http://www.omdbapi.com/?apikey=7cc1e25&s=${movieForm}`;
  const getVad = await get(url);
  return getVad;
};

/* export const searchById = async (movieForm) => {
  const url = `http://www.omdbapi.com/?apikey=7cc1e25&i=${movieForm}`;
  const getVad = await get(url);

  console.log(getVad);
  return getVad;
};
 */
