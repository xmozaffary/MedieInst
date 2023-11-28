import "./../scss/style.scss";

const app2 = document.getElementById("app2");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.target.classList.add("btn-danger");

  const url = "http://www.omdbapi.com/?apikey=7cc1e25&s=star";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.Search);
      for (let i = 0; i < data.Search.length; i++) {
        const card = document.createElement("div");
        const cardImgTop = document.createElement("img");
        const cardBody = document.createElement("div");
        const cardTitle = document.createElement("h5");
        const cardText = document.createElement("p");

        cardImgTop.src = data.Search[i].Poster;
        cardTitle.innerHTML = data.Search[i].Title;
        cardText.innerHTML = data.Search[i].Year;

        card.className = "card col";
        card.classList.add("style");
        cardImgTop.className = "card-img-top";
        cardBody.className = "card-body";
        cardTitle.className = "card-title";
        cardText.className = "card-text";

        app2.appendChild(card);
        card.appendChild(cardImgTop);
        card.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
      }
    });
});

const dd = document.createElement("div");
