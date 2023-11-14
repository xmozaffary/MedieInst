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

/* const person1 = new Person("Ali", 23, "Rezai", 167);
const person2 = new Person("Reza", 25, "Jafari", 170);
const person3 = new Person("Mamal", 23, "Rozi", 190);
const person4 = new Person("Pedram", 23, "Salar", 187); */

/*
const persons = [person1, person2, person3, person4];

for (let i = 0; i < persons.length; i++) {
  console.log(persons[i]);
}
 */
