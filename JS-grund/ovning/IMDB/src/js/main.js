import './../css/style.css'
let url = `http://www.omdbapi.com/?t=$"Alien"&apikey=7cc1e25`;

const getData = fetch(url);
console.log(getData);
const changeTojson = getData.then((res) => {
  console.log(res.json());
});

changeTojson.then((res) => console.log(res.Poster));