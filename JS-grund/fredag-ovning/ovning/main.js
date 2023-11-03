import './style.css'

const textF = document.getElementById("test").value;
console.log(textF);

saveBtn.addEventListener("click", () =>{
  document.getElementById("demo").innerHTML = "=> " + textF;
});

