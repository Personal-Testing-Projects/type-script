var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = {
    firstName: "Pathum",
    age: 22,
    hobbies: {
        sports: "swimming"
    }
};
console.log(person);
var firstName = person.firstName, age = person.age;
person.age = 30;
console.log(person);
