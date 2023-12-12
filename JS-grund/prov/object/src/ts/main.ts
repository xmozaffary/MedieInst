import "./../scss/style.css";

const body = document.querySelector("body") as HTMLBodyElement;

class Person {
  constructor(
    public name: string,
    public age: number,
    public gen: string,
    public made: string
  ) {}
}

function p1() {
  const p1 = new Person("Ali", 23, "m", "hello");
  const h1 = document.createElement("h1");
  h1.innerHTML = p1.name;
  body.appendChild(h1);
}

for (let i = 0; i < 10; i++) {
  p1();
}
