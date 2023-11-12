import "./../css/style.css";
//import "./../media/save.svg";
// create heaher
const headerContainer = document.getElementById("headerContainer");
headerContainer.className = "headerContainer";
const app = document.getElementById("app");
app.className = "app";

const headerContent = document.createElement("div");
headerContainer.appendChild(headerContent);
headerContent.className = "headerContent";

const navigation = document.createElement("nav");
navigation.className = "navigation";
headerContent.appendChild(navigation);

const logoSrc =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png";
const logo = document.createElement("img");
logo.setAttribute("src", logoSrc);
logo.setAttribute("alt", "Logo");
logo.className = "logo";
navigation.appendChild(logo);

const humMenu = document.createElement("div");
headerContent.appendChild(humMenu);
humMenu.className = "humMenu";

const h = document.createElement("div");
humMenu.appendChild(h);
h.className = "h";

for (let i = 0; i < 3; i++) {
  const div = document.createElement("div");
  h.appendChild(div);
  div.className = "divNav";
}
const menuText = document.createElement("h5");
humMenu.appendChild(menuText);
menuText.innerText = "MENU";

humMenu.addEventListener("click", () => {
  const menu = document.createElement("div");
  menu.className = "createMenu";
  app.appendChild(menu);

  const deleteButton = document.createElement("div");
  menu.appendChild(deleteButton);
  deleteButton.className = "deleteButton";

  const kryss = document.createElement("div");
  deleteButton.appendChild(kryss);
  kryss.className = "kryss";
  kryss.addEventListener("click", () => {
    menu.remove();
  });
});

const categories = document.createElement("div");
headerContent.appendChild(categories);
categories.className = "categories";

const categoriesAll = document.createElement("p");
categories.appendChild(categoriesAll);
categoriesAll.className = "categoriesAll";
categoriesAll.innerText = "All";

const triangel = document.createElement("div");
categories.appendChild(triangel);
triangel.className = "triangel";

categories.addEventListener("click", (e) => {
  const categoriesContent = document.createElement("div");
  categoriesContent.className = "categoriesContent";
  app.appendChild(categoriesContent);
  triangel.className = "arrowDown";
});

/* 
humMenu background color
arrow smoth
categories positain and toggle
responsive
append order
multi attributes
ibland när jag skriver först className och sen appendchild fungerar det inte.
search border radius och padding
 */

const search = document.createElement("input");
headerContent.appendChild(search);
search.setAttribute("class", "search");
search.setAttribute("placeholder", "search");
search.setAttribute("type", "text");
search.addEventListener("click", () => {
  search.classList.add("getNewStyle");
  //do nothing yet
});

const watchList = document.createElement("div");
headerContent.appendChild(watchList);
watchList.className = "watchList";

const watchListContent = [0, "Watchlist"];

for (let i = 0; i < watchListContent.length; i++) {
  const watchBtn = document.createElement("div");
  watchBtn.innerText = watchListContent[i];
  watchList.appendChild(watchBtn);
}

const movieContainer = document.createElement("div");
app.appendChild(movieContainer);
movieContainer.className = "movieContainer";

const movies = ["alian", "alian1", "alian2", "alian3"];

const myFavorite = [];
movies.forEach((e) => {
  const movielist = document.createElement("div");
  movieContainer.appendChild(movielist);
  movielist.className = "movielist";
  movielist.innerHTML = e;
  movielist.addEventListener("click", () => {
    myFavorite.push(e);
    f();
  });
});

const c = document.createElement("div");
app.appendChild(c);

const f = () => {
  c.innerHTML = "";
  myFavorite.forEach((e) => {
    const productContainer = document.createElement("div");
    productContainer.innerHTML = e;
    c.appendChild(productContainer);
    productContainer.className = "movielist";
  });
  console.log(watchListContent[0]++);
  watchBtn.innerText = watchListContent[0]++;
};

// add to watch list
