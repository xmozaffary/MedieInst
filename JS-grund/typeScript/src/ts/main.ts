import "./../scss/style.scss";
import { createElement } from "./createHtml";
import { get } from "./service/service";
import { searchMovie } from "./service/serviceUrl";

const form = document.getElementById("form");
//const app = document.getElementById("app");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const url = searchMovie();

  const data = await get(url);

  createElement(data);
});
