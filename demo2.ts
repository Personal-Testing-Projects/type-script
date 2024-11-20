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

class Customer {
  private cId : string;
  private cAge : number;
  
  constructor(cId : string, cAge : number) {
    this.cId = cId;
    this.cAge = cAge;
  }

  print() {
    console.log(this.cId,this.cAge);
  }

  public setCId(cId : string) {
    this.cId = cId;
  }

  public setCAge(cAge : number) {
    this.cAge = cAge;
  }

  public getCId() : string {
    return this.cId;
  }

  public getCAge() : number {
    return this.cAge;
  }

}

const customer1 = new Customer("c001", 22);
customer1.print();
customer1.getCAge();