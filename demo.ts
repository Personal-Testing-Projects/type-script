// function add(n1:number, n2:number) {
//   return n1 + n2;
// }

// console.log("Hello World", add(1,2))

// var x = 3;
// x = "pathum"
// //type cant change

// var y : any = 10;
// y = "pathum"
// //using any type can change

// let n1 : unknown;
// n1 = 1;
// n1 = "pathum"
// //using unknown type can change

// let n2 : never
// n2 = 1;
// //cant assign a value

// let userId : string | number = 10;
// userId = "sdad"
// userId = 4
// userId = true
// userId = 'a'
// //now string or a number can assign
// //example for like JWT tokens

let ar = []// we cant add a value
let ar1  = ['1','2','3']; //string array
let ar2 = [1,2,3]; //number array
let ar3 = [1,'2',false]; //any type array

let ar4 : string[];//String array 2
let ar5 : number[];//Number array 2
let ar6 : any[];

//print

function printArray(ar : number[]) {
  ar.forEach((e)=>{
    console.log(e);
  });
}
// ar2.forEach((e)=> {
//   console.log("Array : ", e)
// });

printArray(ar2);
//printArray(ar1);






