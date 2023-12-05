import "./../scss/style.scss";
import { createHtml } from "./createHtml";
import { get } from "./service.js/service";
import { search } from "./service.js/serviceMovies";

// const appCol = document.getElementById("col");

document.getElementById("startTime").addEventListener("click", () => {
  setTimeout(() => {
    alert("nu");
  }, 3000);
});

let i = 0;
let interId = 0;
document.getElementById("startInter").addEventListener("click", () => {
  interId = setInterval(() => {
    document.getElementById("re").innerHTML = i;
    i++;
  }, 100);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(interId);
});
/* ----------------------------------------------------------------------- */

const searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const movieForm = document.getElementById("searchText").value;
  console.log(movieForm);

  const movies = await search(movieForm);
  createHtml(movies);

  console.log(movies);
});
