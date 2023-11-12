/* import './../css/style.css'

const age = 22;
const fName = "Ali";
const isTrue = true;

age++;

console.log(fName + "Rezai");

if (isTrue) {
  console.log("yes");
}else{
  console.log("no");
}

function fnName() {
  
}
//parameter
const aName = (word) =>{
  // man kan nvända parameter
  // man vill fler parameter kan man skick och sska man ssepaera med komma (,)
  //en funktiona kan också returnera något genom at a skriva return
  return word.toUppercase();
}

// man ska anropa functionen
// 
aName(); // om man skriver en value när man anroper functionen kallas för argoment
fnName();


//HTML(DOM)
document.getElementById("id");
document.querySelector("div > .red");

id.innreHtml = "innehåll";
id.className = "namnet på klassen";

const skapa = document.createElement("namn på html tag");
skapa.innerHTML = "innehåll";

id.appandChild(skapa);

//skapa.addEventListener("click"/* man kan skriva starta animation här */ //, //() =>{
// man kan snropa en annan funktion här
//})

// */

/* Listor */
/* const numbers = [1, , 2, ,3 , 4, , 5, 6];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  console.log(element);
  
}

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const div = document.createElement("div");
  div.className = "number";
  document.body.appendChild(div);
  
  div.addEventListener("click", () =>  {
    div.innerHTML = "Du Klickade på; " + numbers[i];
  })
  
} */

// data drivan

const products = ["ali", "Rezai", "FRD23"];

products.forEach((product) => {
  const pContainer = document.createElement("div");
  const title = document.createElement("h3");
});

// single page application, kolla på den.
