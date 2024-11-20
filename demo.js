// function add(n1:number, n2:number) {
//   return n1 + n2;
// }
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var ar = []; // we cant add a value
var ar1 = ['1', '2', '3']; //string array
var ar2 = [1, 2, 3]; //number array
var ar3 = [1, '2', false]; //any type array
var ar4; //String array 2
var ar5; //Number array 2
var ar6;
//print
function printArray(ar) {
    ar.forEach(function (e) {
        console.log(e);
    });
}
// ar2.forEach((e)=> {
//   console.log("Array : ", e)
// });
printArray(ar2);
//printArray(ar1);
var ar8 = ["a", "b"];
var ar9 = ["c", "d"];
var ar10 = __spreadArray(__spreadArray([], ar8, true), ar9, true);
console.log(ar10);
var ar12 = [1, "q"];
var x = ar12[0], y = ar12[1];
console.log(x);
console.log(y);
