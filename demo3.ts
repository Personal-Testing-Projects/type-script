interface Customer{
  cId : number;
  cName : string
}

class MidCustomer implements Customer{
  cId: number;
  cName: string;
}

// inheritance 

class Animal{
  constructor(feed: string, animalType: string){
      console.log(feed," : ",animalType);
  }
}
class Cat extends Animal{
  constructor(feed: string,animalType: string){
      super(feed,animalType);
  }
}

class Dog extends Animal{
  constructor(feed: string,animalType: string){
      super(feed,animalType);
  }
}

new Dog("bisket","Dag")