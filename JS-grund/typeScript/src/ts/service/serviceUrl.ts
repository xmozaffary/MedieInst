export const searchMovie = (): string => {
  const formInput = document.getElementById("fromInput") as HTMLInputElement;
  const input = formInput.value;
  const url = `https://www.omdbapi.com/?apikey=7cc1e25&s=${input}`;
  return url;
};
