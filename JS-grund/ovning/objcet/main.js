import "./style.css";
function Person(name, surname, age, length) {
  this.name;
  this.surname;
  this.age;
  this.length;
}

window.onload = function () {
  const person1 = new Person();
  person1.name = "ali";
  person1.surname = "Rezai";
  person1.age = 23;
  person1.length = 167;
  console.log(person1);
};
