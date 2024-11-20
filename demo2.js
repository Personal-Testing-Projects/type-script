// class Person {
//   firstName : string;
//   age : number;
//   hobbies : object;
// }
// var person  : Person = {
//   firstName : "Pathum",
//   age : 22,
//   hobbies : {
//     sports : "swimming"
//   }
// }
// console.log(person)
// const {firstName, age} = person;
// person.age = 30;
// console.log(person)
//////////////////////////////////////////////////////
var Customer = /** @class */ (function () {
    function Customer(cId, cAge) {
        this.cId = cId;
        this.cAge = cAge;
    }
    Customer.prototype.print = function () {
        console.log(this.cId, this.cAge);
    };
    Customer.prototype.setCId = function (cId) {
        this.cId = cId;
    };
    Customer.prototype.setCAge = function (cAge) {
        this.cAge = cAge;
    };
    Customer.prototype.getCId = function () {
        return this.cId;
    };
    Customer.prototype.getCAge = function () {
        return this.cAge;
    };
    return Customer;
}());
var customer1 = new Customer("c001", 22);
customer1.print();
customer1.getCAge();
