import './../css/style.css'



function Person (){

    class Person {
        name;
        age;
        len;
        constructor(name, age, len){
            this.name = name;
            this.age = age;
            this.len = len;
        }
    }

}

window.onload = () => {
    const person1 = new Person("a", 23, 167);
    console.log(person1.name);
};