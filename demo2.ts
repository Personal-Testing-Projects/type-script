class Person {
  firstName : string;
  age : number;
  hobbies : object;
}

var person  : Person = {
  firstName : "Pathum",
  age : 22,
  hobbies : {
    sports : "swimming"
  }
}
console.log(person)

const {firstName, age} = person;
person.age = 30;
console.log(person);