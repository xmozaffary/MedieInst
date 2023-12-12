import './../css/style.css'

const app = document.getElementById("app");

const titles = ["The Matrix", "Inception", "Interstellar", "Blade Runner", "Back to the Future", "Star Wars", "Jurassic Park", "The Terminator", "Alien", "The Shawshank Redemption"];
function doIt(){
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    // const film = 'http://www.omdbapi.com/?t="The Matrix"&apikey=7cc1e25';
    const film = `http://www.omdbapi.com/?t=${randomTitle}&apikey=7cc1e25`;
    fetch(film)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let img = document.createElement("img");
    img.src = data.Poster;
    h3.innerHTML = data.Title + " " + data.Year;
    app.appendChild(div);
    div.appendChild(h3);
    div.appendChild(img);
  });
}

doIt();
setInterval(doIt, 100);