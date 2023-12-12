import { searchMovies } from './searchMovies';
import './style.css'

const searchForm = document.getElementById("searchForm");
const app = document.getElementById("app");


searchForm?.addEventListener("submit", async (e) => {
  e.preventDefault()
  const searchText = (<HTMLInputElement>document.getElementById("searchText")).value;
  const a = await searchMovies(searchText)
  console.log(a.Search[0].Year);

  
  for (let i = 0; i < a.length; i++) {
    const salam = document.createElement("div")
    salam.innerHTML = a.Search[i].Title
    app?.appendChild(salam);
  }
})

