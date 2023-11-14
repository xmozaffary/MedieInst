import "./../css/style.css";
import { Car } from "./models/Car";
import { Person } from "./models/Person";

const app = document.getElementById("app");

const ali = new Person("Ali", 23, "M");
const reza = new Person("Reza", 23, "M");
const naji = new Person("Naji", 23, "F");

const myCar = new Car("Vet ej", "tesla s3", 2020, ali);
const rezasCar = new Car("Golabi", "tesla s5", 2021, reza);
const najisCar = new Car("Shalgham", "tesla 3", 2022, naji);
// lists
const cars = [myCar, rezasCar, najisCar];
const persons = [ali, reza, naji];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  span.innerHTML = cars[i].make;
  p1.innerHTML = cars[i].model;
  p2.innerHTML = cars[i].year;

  app.appendChild(div);
  div.appendChild(span);
  div.appendChild(p1);
  div.appendChild(p2);
}

for (let i = 0; i < persons.length; i++) {
  console.log(persons[i]);
}
