// var a = 10;
// var b = 30;
// let c;
// function square(square) {
//   let multiply = square * square;
//   return multiply;
// }

// let square1 = square(a);
// let square2 = square(5);

// dob = 1991;
// let person = {
//   firstname: "MAXX",
//   lastname: "zoom",
//   since: 2016,
//   running: true,
// };

// person.dob = dob;

// delete person.since;

// console.log(person.firstname.charCodeAt(1));
// let dob="2022-12-10"
// const date = new Date();
// date.setFullYear(2020, 4, 1);
// document.getElementById("para").innerHTML = date;

// const arr = [2, 3, 4, 5, 7, 10, 12];

// arr.forEach((element) => {
//   console.log(element);
// });

// const filterArray = arr.filter((element) => {
//   return element > 9;
// });
// // console.log(filterArray);

// const maparr = arr.filter((element) => {
//     return element + 9;
//   });

// function getname() {
//   return "Tushar";
// }

// getname();

// const array = () => {

// };

/* Array methods */

// const arr = [70, 30, 40, 50, 50, 90, 60, 50];

// /* For Each */
// /* for each is used to iterate the elements of an array or collection without an index variable */
// arr.forEach((element) => {
//     console.log(element);
//     // 70 console.log(70)
//     // 30 console.log(30)
// });

// /* Filter */
// /* if we want filter some of the value from an array & it will return new array*/

// const filterArray = arr.filter((element) => {
//   return element > 40;
// });

// console.log(filterArray);

// /* Map */
// /* by iterating each element and we can modify the things and return the new array */
// const maparr = arr.map((element) => {
//   return element;
// });

// console.log(maparr);

// /* Find */
// /* it will return whether element present or not at first index */

// const firstindex = arr.find((element) => {
//   return element === 40;
// });
// // console.log(firstindex);

// /* indexof */
// /* if we want to find any element position in array */
// const index = arr.indexOf(40);
// console.log(index);

// /* lastindexof */
// /* if one element occuring multiple time in array */
// const lastindex = arr.lastIndexOf(50);
// console.log(lastindex);

// /* reduce */

// function refun(total, num) {
//   return total + num;
//   /* total=0+70 */
//   /* total =70+30 */
// }
// const sum = arr.reduce((currsum, element) => currsum + element);
// console.log(sum);

// var a = 20;
// let b = 20;
// function getname() {
//   return 2 * 2;
// }

// console.log(getname());

// const arrofun = () => {
//     return 2 * 4;
// };

const arr = [10, 20, 30, 40, 50, 60, 40, 70];

/* Array Methods */

/* For each */
/*  it is used to iterate the elements of an array or collection without using an index variable */
arr.forEach((element) => {
  //   console.log(element);
});

/* Filter */
/* if want filter some of the value from array & it will return new array  */
const filterArray = arr.filter((element) => element < 30);

// console.log(filterArray);

/* Map */
/* by iterating each elements we can modify the things and we will get new array  */
// const maparr = arr.map((element) => element + 2);
const mapfilarr = arr
  .filter((el) => el > 20)
  .map((el) =>  el);
console.log(mapfilarr);

/* Find */
/* it will return whether element present or not at first index */
const find = arr.find((element) => {
  return element === 40;
});
// console.log(find);

/* indexOf */
/* if we want to find any element position in array */
const index = arr.indexOf(40);
// console.log(index);

/* lastindexof */
/* one element occuring multiple time in array */
const lastindexof = arr.lastIndexOf(40);
// console.log(lastindexof);

/* reduce */
/* when we want to add all element and return only 1 element */
// let sum = arr.reduce((all, element) => {
//   return all + element;
//   0+10
//   10+20
//   30+30
// }, 30);
// console.log(sum);

// function test(arg1, arg2){
//   console.log(this.num, arg1, arg2); // 100, 10, 20
// }

// test.call({num: 100}, 10, 20);

/* for */
let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

// /* While */
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// const fruits = ["apple", "banana", "orange", "mango", true];
// let j = 0;
// while (j < fruits.length) {
//   console.log(typeof fruits[j]);
//   j++;
// }

// let k = 1;
// while (k <= 3) {
//   let j = 1;
//   while (j <= 3) {
//     console.log(i + " " + j);
//     j++;
//   }
//   k++;
// }
