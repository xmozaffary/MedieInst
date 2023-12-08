import "./../scss/style.scss";
import { createHtmlMovies } from "./createHtmlMovies";
import { searchMovie } from "./service/searchMovie";
import { getSlSiteId } from "./service/getSlSiteId";
import { getSlRealTime } from "./service/getSlRealTime";
import { createHtmlSl } from "./createHtmlSl";

const form = document.getElementById("form") as HTMLFormElement;
form.addEventListener("submit", async (e: SubmitEvent) => {
  e.preventDefault();
  const movies: string = "Movies";
  const select = document.getElementById("select") as HTMLSelectElement;
  const selectCh = select.value;
  if (selectCh === movies) {
    const movieList = await searchMovie();
    createHtmlMovies(movieList);
  } else {
    const siteId = await getSlSiteId();
    const sl = await getSlRealTime(siteId);
    console.log(sl);

    createHtmlSl(sl);
  }
});
