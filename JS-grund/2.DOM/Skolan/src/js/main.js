const drink = document.getElementById("container");
drink.innerHTML = "frukt";
const runing = document.getElementById("runningImg");
//console.log(runing);

runing.setAttribute("src", "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20220809110855/ri/1000/src/images/Article_Images/ImageForArticle_22980_16600577310868068.jpg"
)
runing.setAttribute("alt", "running");

const test = document.getElementById("test");
const minH2Tag = document.createElement("h2"); // en tom h2 tag
minH2Tag.innerHTML = "spr<i>i<i>ng";
minH2Tag.innerText += " spt<i>i<i>ng";
test .appendChild(minH2Tag); // nu finns h2 tag inuti div tag


const imgC = document.createElement("div");
const img = document.createElement("img");

img.setAttribute("https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20220809110855/ri/1000/src/images/Article_Images/ImageForArticle_22980_16600577310868068.jpg");


