// // document.getElementById("para").innerHTML = "Hello world";
// // var a = 10;
// // var b;
// var data = false;
// // console.log(a);

// // is used to execute a piece of code
// // function myfuc() {
// //   return 2 * 3;
// // }

// // let y = myfuc();
// // // console.log(y);

// // let calc2 = () => 2 * 3;
// // let mul = calc2();
// // console.log(mul);

// // // let calc = () => 4 * 4;

// // (function () {
// //   console.log("testing");
// // })();

// /* Var */
// // var is a global scope
// // it can be reassign and redeclare

// // var data = ["gg","gg",20,false,undefined];
// // console.log(data);
// var data = 40;
// console.log(data);

// {
//     var data = false;
//     console.log(data);
// }
// console.log(data);

// // let
// // let are block scope
// // it can be reassign and but we cannot be redeclare in the same scope
// let firstname = "gg";

// // Const
// // const are block scope
// // it cannot be reassingn and it cannot be redeclare in the same scope
// const PI = 3.14;

//  firstname = "zoom";
// {
//   var b = false;
//   let firstname = "maxx";
//   console.log(firstname);
// }
// // {
// //   let firstname = "zoom";
// //   console.log(firstname);
// // }
// // console.log(b);
// console.log(firstname);

// Hoisting
// its a default behaviour of js where all function and variable declaration are moved to top of the scope
// let date = document.getElementById("date");

// const arr = ["verna","hyndai","chevrolet"];
// const arr2 = ["benz","altroz","swift"];
// isNaN => is Not a Number
// console.log(isNaN(date));
// console.log(isNaN(true)); /* 1 */
// console.log(isNaN(false)); /* 0 */
// console.log(isNaN("string"));
// console.log(isNaN(undefined));
// console.log(null);

// let data = " ";
// // ==  /* it will only check the value */
// let a = "hh";
// let b = "hh";
// console.log(a === b);

// Object => an object is a collection of properties
// let data = "vivo";

// const mobile = {
//   model: "Phone",
//   memory: 128,
//   screen: "5.6 inches",
//   camera: "8 mega pixel",
//   ram: 16,
//   rs: 565,
//   off: 43,
//   getscreenandmemory: function () {
//     return (
//       "screen size" + " " + this.screen + "and the memory" + " " + this.memory
//     );
//   },
//   getrupeesandoff: function () {
//     return "rupees" + " " + this.rs + " " + "off upto" + " " + this.off + "%";
//   },
// };

// 2 ways of accessing properties
// const model = mobile.model;
// console.log(model);

// const camera = mobile["camera"];
// console.log(camera);

// // way to access the methods
// const output = mobile.getscreenandmemory();
// console.log(output);

// // // // Update/add properties;
// mobile.graphics = "snapdragon";
// console.log(mobile);

// // delete properties
// delete mobile.memory;
// // console.log(mobile.memory);

// // const output = mobile.getrupeesandoff();
// // console.log(output);

// let data = "vivo";
// Number  string null undefined
// Array
// is a special kind of object
// const arr8 = [""];

// 3 ways to define an array
// const arr1 = ["audi", "bmw", "benz", "swift", 45, true];
// console.log(typeof arr1);

// const arr6 = [];
// arr6[0] = "verna";
// arr6[1] = "altroz";
// arr6[8] = "swift";
// console.log(arr6);

// const arr3 = new Array("kia", "sonai", "seltos");
// slow one

// Length of an array
// console.log(arr1.length);

// convert to string
// console.log(arr1.toString());

// join()- it will have in similar way as string() method but you can parts seperater
// console.log(arr1.join(":"));

// pop()- remove the elements from last
// let result = arr1.pop();
// console.log(arr1);

// Shift()-> removes the elements but from first
// let result = arr1.shift();
// console.log(arr1);

// unShift()-> adding new elements but from first
// const arr1 = ["audi", "bmw", "benz", "swift"];
// const arr2 = [2, 40, 65, 845];

// arr1.unshift("hundai");
// console.log(arr1);

// const arr1 = ["audi", "bmw", "benz", "swift"];
// const arr2 = [55, 67, 33, 45, true];
// const arr3 = ["audi", "bmw", "benz", "swift", 45, true];
// Splice - add new element into array at any specific index
// // 1 is index, 0 no of elements to delete,element to add
// arr1.splice(0, 5, "tata", "chervolet");
// console.log(arr1);

// concat() => when we want merge to 2 arrays
// let concatarr = arr1.concat(arr2);
// console.log(concatarr);

// Slice() => recreate any array from the existing array
// const slicearr = arr1.slice(1, 2);
// console.log(arr1);
// console.log(slicearr);

// const reduarr = arr2.reduce((sum, value, arr1) => {
//   return arr1;
// }, 0);
// console.log(reduarr);
// const numbers = [5, 7, 2, 9, 3];
// const max = numbers.reduce((accumulator, currentValue) => {
//   return accumulator > currentValue ? accumulator : currentValue;
// }, numbers[0]); // Start with the first number as the initial value

// console.log(max);

// Array methods =>map,filter, reduce, find, foreach, indexof, lastindexof

// const arr = [75, 61, 24, 789, 65];

// for(i=0;i<arr.length;i++){
//   console.log(arr[i]);
// }

// console.log(arr.length);

// Foreach =>is used to iterate the elements of an array or collection without using an index variable
// arr.forEach((element) => {
//   console.log(element);
// });

// const numberarr = [75, 61, 24, 789, 65, true, "44"];
/* IMP */
// filter => if we want to filter some of the element(values) from an array & it will return new array
// const filterarr = arr.filter((element) => typeof element==="number");
// // console.log(arr);                          number===number
// // console.log(filterarr);

// /* IMP */
// // map =>by iterating each of element we can modify the things & return new array

// const mapnumberarr = numberarr.map((element) => (element += 2));
//                                                 //element=element+2
// console.log(arr);
// console.log(mapnumberarr);

// Map and filter together
// const obj22={ name: "redmi", ram: 16 }
// const obj23={ name: "real", ram: 16 }
// const mobile3 = [
//   { name: "redmi", ram: 16 },
//   { name: "realme", ram: 32 },
//   { name: "redmi", ram: 16 },
//   { name: "oppo", ram: 32 },
// ];

// let ram32only = mobile3
//   .filter((mobile) => mobile.ram === 32)
//   .map((element) => element.name);
// console.log(ram32only);

// const numberarr = ["realme", 61, 24, 789, 61, 65, true, "44", 61];
// const mobileusersearch=document.getElementById("prodsearch")
// // find => it wil return whether element present or not at first index
// const isfind = arr.find((element) => {
//   return element === mobileusersearch;
// });
// console.log(isfind);

// // indexOf => if we want to find any element position in array
// const indexof=numberarr.indexOf(61)
// console.log(indexof);

// lastIndexOf() => one element occure multiple time in array -> last index
// const lastindex=numberarr.lastIndexOf(61);
// console.log(lastindex);
// const arr = [75, 61, 24, 61, 61,65];

// IMP
// reduce() => when todo such operation and want to return single element
// const reduarr = arr.reduce((total, element) => {
//   return total + element;
//   // total=0+75;
//   // total=75+61;
//   // total=136+24;

// }, 0);
// console.log(reduarr);

// Pass by value => primitive
// let a = 10;
// let b = a;
// console.log(a, b);
// b = 20;
// console.log(a, b);
// console.log(a, b);

// // Pass by reference => objects
// let obj1 = { name: "anuj" };
// let obj2 = obj1;
// console.log(obj1, obj2);
// obj2.name = "rahul";
// let obj3 = obj2;
// console.log(obj1, obj2,obj3);
// obj3.name = "sam";
// console.log(obj1, obj2,obj3);
