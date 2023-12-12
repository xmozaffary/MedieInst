import { IOmdbResponse } from "./models/IOmdbReesponse";

export const createHtmlMovies = (d: IOmdbResponse) => {
  const moviesContainer = document.getElementById(
    "moviesContainer"
  ) as HTMLDivElement;
  moviesContainer.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const movieContainer = document.createElement("div");
    const movieImg = document.createElement("img") as HTMLImageElement;
    const movieTitle = document.createElement("p");
    const movieYear = document.createElement("p");

    movieImg.src = d.Search[i].Poster;
    movieTitle.innerHTML = d.Search[i].Title;
    movieYear.innerHTML = d.Search[i].Year;

    moviesContainer.classList.add("moviesContainer");
    movieContainer.classList.add("movieContainer");
    movieImg.classList.add("movieContainer__img");
    movieTitle.classList.add("movieContainer__title");
    movieYear.classList.add("movieContainer__year");

    moviesContainer?.appendChild(movieContainer);
    movieContainer.appendChild(movieImg);
    movieContainer.appendChild(movieTitle);
    movieContainer.appendChild(movieYear);
  }
};
