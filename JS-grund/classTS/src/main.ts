import './style.css'


const url = "https://openlibrary.org/search.json?q=the+lord+of+the+rings"

const r = await fetch(url);
const data = await r.json();

console.log(data);
