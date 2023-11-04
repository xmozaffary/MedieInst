import './../css/style.css';

window.onload = function(){
  const app = document.createElement("div");
  app.className = "app";
  document.body.appendChild(app);

  const p = document.createElement("p");
  app.appendChild(p);
  p.innerText = "första talet:";
  
  const firstInput = document.createElement("input");
  firstInput.setAttribute("type", "number");
  app.appendChild(firstInput);
  firstInput.className = "oneRow";
  
  const secondP = document.createElement("p");
  app.appendChild(secondP);
  secondP.innerText = " + ";


  const secondInput = document.createElement("input");
  secondInput.setAttribute("type", "number");
  app.appendChild(secondInput);
  secondInput.className = "oneRow";

  const sumButton = document.createElement("button");
  app.appendChild(sumButton);
  sumButton.innerText = "Sum";
  
  const sumP = document.createElement("p");
  app.appendChild(sumP);
  sumP.innerText = "Summan blir: ";
  
  sumButton.addEventListener("click", () => {
    const inputFirstNumber = firstInput.value;
    const inputSecondNumber = secondInput.value;

    console.log( typeof inputFirstNumber, typeof inputSecondNumber);
    
    const firstTal = parseInt(inputFirstNumber);
    const secondTal = parseInt(inputSecondNumber);

    console.log( typeof firstTal, typeof secondTal);

    const sum = firstTal + secondTal;
    sumP.innerText += " " + sum;
  })
}