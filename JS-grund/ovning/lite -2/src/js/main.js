import './../css/style.css';

/* const ul = document.createElement("ul");
app.appendChild(ul);

const numbers = [1, 1, 2, 3,5 ,8 ,13, "h"];


for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const lastindex = numbers.length -1;
  if(i !== lastindex){
      const li = document.createElement("li");
      li.innerHTML = element;
      ul.appendChild(li);
  }
} */

/* const app = document.getElementById("app");
const theInput = document.getElementById("theInput");
theInput.addEventListener("keyup", (e) => {
  const p = document.createElement("p");
  app.appendChild(p);
  p.innerHTML = e.target.value;
  if(parseInt(e.target.value[0], 0)){
    e.target.className = "change";
  }
  if(e.target.value.length === 0)
  {
    e.target.className = "changegreen";
    return;
  }
  if(e.target.value[0] === e.target.value[0].toUpperCase() ){
    p.innerHTML = e.target.value;
    console.log(e.target.value);
  }else{
    p.innerHTML = "fel";
    e.target.className = "change";
  }
}) */


let b;

function f(a){
  if(a == 1){
    b = a - 1;
  }else{
    a + 1;
  }
  return b;
}

const d = f(1);

console.log(d);