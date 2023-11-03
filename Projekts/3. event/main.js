import './style.css'

function myFunction(){
  
}

const pB = (e) =>{
  e.target.className = "blue";
}

const first = document.getElementById("first");
first.addEventListener("click", myFunction);
first.addEventListener("click", pB);

first.addEventListener("mouseenter", pB);
first.addEventListener("click", pB);