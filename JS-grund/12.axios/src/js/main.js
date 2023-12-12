import "../scss/style.scss";
// 7cc1e25

const app = document.getElementById("app");
const searchMovies = document.getElementById("searchMovies");

searchMovies.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchText = document.getElementById("searchText").value;
  const url = `http://www.omdbapi.com/?apikey=7cc1e25&s=${searchText}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data.Search);

  /* const d = await getData(searchText).Search;
    console.log(d); */
});

/* const getData = async (title) => {
    const url = `http://www.omdbapi.com/?apikey=7cc1e25&s=${title}`
    const response = await fetch(url);
    const data = await response.json();
    return data;
};
 */
/* function createHtml(movies) {

    movies.forEach((movie) => {
        const movieContainer = document.createElement("div");
        movieContainer.innerHTML = movie.Title;
        app.appendChild(movieContainer)
    });
} */

/* function getData(title) {
    const url = `http://www.omdbapi.com/?apikey=7cc1e25&s=${title}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
             console.log(data.Search);
        })
}  */
