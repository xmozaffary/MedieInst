export const createHtml = (getVad) => {
  const appCol = document.getElementById("col");
  appCol.innerHTML = "";
  for (let i = 0; i < getVad.Search.length; i++) {
    const column = document.createElement("div");
    const card = document.createElement("section");
    const cardImg = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");
    const cardId = document.createElement("p");

    cardImg.src = getVad.Search[i].Poster;
    cardTitle.innerHTML = getVad.Search[i].Title;
    cardText.innerHTML = getVad.Search[i].Year;
    cardId.innerHTML = getVad.Search[i].imdbID;

    column.className = "col";
    card.className = "card myStyle";
    cardImg.className = "card-img-top";
    cardBody.className = "card-body";
    cardTitle.className = "card-title";
    cardText.className = "card-text";
    cardId.className = "card-text";

    appCol.appendChild(column);
    column.appendChild(card);
    card.appendChild(cardImg);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardId);
  }
};
