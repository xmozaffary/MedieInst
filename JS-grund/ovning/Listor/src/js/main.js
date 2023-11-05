import './../css/style.css'
window.onload = function(){
  const myName = "Ali";
  const len = myName.length;

  const p = document.createElement("p");
  app.appendChild(p);
  
  for (let i = 0; i < len; i++) {
    console.log(myName[i]);
    const lastIndex = myName[myName.length -1]
    if(myName[i] == lastIndex){
      p.innerText += myName[i];
    }else{
      p.innerText += myName[i] + "+";
    }
  }

  const myArray = [1,2,3,4,5,6,7,8,9,10];
  const demo = document.createElement("p");
  const ul = document.getElementById("lista");

  app.appendChild(demo);
  let element = 0;
  for (let i = 0; i < myArray.length; i++) {
    element = element + myArray[i];
    const li = document.createElement("li");
    lista.appendChild(li);
    li.innerText = myArray[i];
  }
  demo.innerHTML = "Suman är: " + element;
}