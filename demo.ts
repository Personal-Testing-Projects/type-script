// // function add(n1:number, n2:number) {
// //   return n1 + n2;
// // }

// // console.log("Hello World", add(1,2))

// // var x = 3;
// // x = "pathum"
// // //type cant change

// // var y : any = 10;
// // y = "pathum"
// // //using any type can change

// // let n1 : unknown;
// // n1 = 1;
// // n1 = "pathum"
// // //using unknown type can change

// // let n2 : never
// // n2 = 1;
// // //cant assign a value

// // let userId : string | number = 10;
// // userId = "sdad"
// // userId = 4
// // userId = true
// // userId = 'a'
// // //now string or a number can assign
// // //example for like JWT tokens

// let ar = []// we cant add a value
// let ar1  = ['1','2','3']; //string array
// let ar2 = [1,2,3]; //number array
// let ar3 = [1,'2',false]; //any type array

// let ar4 : string[];//String array 2
// let ar5 : number[];//Number array 2
// let ar6 : any[];

// //print

// function printArray(ar : number[]) {
//   ar.forEach((e)=>{
//     console.log(e);
//   });
// }
// // ar2.forEach((e)=> {
// //   console.log("Array : ", e)
// // });

// printArray(ar2);
// //printArray(ar1);

// const ar8 = ["a","b"]
// const ar9 = ["c","d"]
// const ar10 = [...ar8, ...ar9]

// console.log(ar10);

// const ar12 : [number,string] = [1,"q"]; //array as key values
// let [x,y] = ar12;

// console.log(x)
// console.log(y)




// ////////////////////////////////////////

// const small = 1;
// const medium = 2;
// const large = 3;

// enum Size {
//   small = 1,
//   medium,
//   large
// }

// console.log(small);
// console.log(medium);
// console.log(large);

// /////////////////////////

// enum Letters {
//   small = "a",
//   medium = "b",
//   large = "c"
// }

// const myLetters : Letters = Letters.large;

// console.log(Letters);
// console.log(Letters.medium)
// console.log(myLetters);

// /////////////////////////

// function add (n1 : number, n2 : number) : number {
//   return n1 + n2;
// } 

// add(1,2);
// console.log(add(1,2));

// function add2 (n1 : number, n2 : number) : never {
//   //return n1 + n2;
//   //cannot return a value from this method
//   console.log(n1+n2);
// } 

// add(1,2);
// console.log(add(1,2));
// add2(1,2);

// //////////////////////////////////////////////

function add(num1:number,num2:number) : number{
  return num1+num2;
}
// let tot = add(10,20)
// console.log(tot);

// substraction of number
function sub(num1:number,num2:number) : number{
  return num1-num2;
}

type addType = (n1: number, n2:number) => number;

function calculate(n1, n2, addfn: addType) {
   const result = addfn(n1,n2)
   console.log(result);
}

calculate(20,20,add)
calculate(30,10,sub)
