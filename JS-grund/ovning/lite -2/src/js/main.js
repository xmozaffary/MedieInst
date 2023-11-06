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

let number1 = 0;
let number2 = 1;
let sum = 0;
for (let i = 0; i < 100; i++) {
  sum = number1 + number2;
  console.log(sum);
}