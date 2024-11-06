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

let data = "vivo";

const mobile = {
  model: "Phone",
  memory: 128,
  screen: "5.6 inches",
  camera: "8 mega pixel",
  getscreenandmemory: function () {
    return (
      "screen size" +
      " " +
      this.screen +
      " " +
      "and memory is" +
      " " +
      this.memory
    );
  },
};

// const mobile2 = {
//   model: "Phone",
//   memory: 128,
//   screen: "5.6 inches",
//   camera: "8 mega pixel",
//   getscreenandmemory: function () {
//     return (
//       "screen size" +
//       " " +
//       this.screen +
//       " " +
//       "and memory is" +
//       " " +
//       this.memory
//     );
//   },
// };

// // 2 ways of accessing properties
// const model = mobile.model;
// console.log(model);

// const camera = mobile["camera"];
// console.log(camera);

// // way to access the methods
// const output = mobile.getscreenandmemory();
// console.log(output);

// // Update/add properties;
// mobile.ram = 16;
// console.log(mobile.ram);

// // delete properties
// delete mobile.memory;
// console.log(mobile);

// Array
// is a special kind of object
const arr = [];
// console.log(typeof arr);

// 3 ways to define an array
// const arr1 = ["audi", "bmw", "benz", "swift"];

// const arr2 = [];
// arr2[0] = "verna";
// arr2[1] = "altroz";

// const arr3 = new Array("kia", "sonai", "seltos");

// Length of an array
// console.log(arr1.length);

// convert to string
// console.log(arr1.toString());

// join()- it will have in similar way as string() method but you can parts seperater
// console.log(arr1.join("-"));

// pop()- remove the elements from last
// let result = arr1.pop();
// console.log(arr1);

// Shift()-> removes the elements but from first
// let result = arr1.shift();
// console.log(arr1);

// unShift()-> adding new elements but from first
const arr1 = ["audi", "bmw", "benz", "swift"];
const arr2 = [2, 40, 65, 845];

// arr1.unshift("hundai");
// console.log(arr1);

// Splice- add new element into array at any specific index
// 1 is index, 0 no of elements to delete,element to add
// arr1.splice(1, 1, "tata", "chervolet");
// console.log(arr1);

// concat() => when we want merge to 2 arrays
// let concatarr = arr1.concat(arr2);
// console.log(concatarr);

// Slice() => recreate any array from the existing array
const slicearr = arr1.slice(0, 2);
console.log(slicearr);