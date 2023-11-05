import './../css/style.css'

const getTetx = document.createElement("input");
getTetx.setAttribute("type", "number");
app.appendChild(getTetx);

const btn = document.createElement("button");
app.appendChild(btn);
btn.innerText = "Check";

btn.addEventListener("click", () =>{
  const getNumber = getTetx.value;
  const changeToNumber = parseInt(getNumber);
  if(changeToNumber >= 100){
    const demo = document.createElement("p");
    app.appendChild(demo);
    demo.innerHTML = "Det var ett stort tal";
  }else{
    const demo = document.createElement("p");
    app.appendChild(demo);
    demo.innerHTML = "Det var ett lite tal";
  }
})