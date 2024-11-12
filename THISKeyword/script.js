// if (navigator.onLine) {
//   console.log("You are online.");
// } else {
//   console.log("You are offline.");
// }

// // Event listeners to detect connectivity changes
// window.addEventListener("online", () => console.log("Back online!"));
// window.addEventListener("offline", () => console.log("Lost connection."));

// function myfun() {
//   console.log(this);
// }
// let data = () => {
//   console.log(this);
// };

// console.log(this);

// myfun();

// This Keyword
//  2 ways of functions
// Normal funcion -> by using different method

//  Arrow function -> this will never change whatever it is

// const student = {
//   id: 2,
//   firstname: "Anuj",
//   lastname: "shinde",
//   getFullName: function () {
//     return this.firstname + " " + this.lastname;
//   },
//   getGreetmessage: function (mess) {
//     return this.firstname + " " + "Welcome" + " " + mess;
//   },
//   // arrowFunction: () => {
//   //   return this.firstname + " " + "arrow" + " ";
//   // }
// };

// console.log(student.getFullName());
// console.log(student.arrowFunction());

// const student2 = {
//   firstname: "amit",
//   lastname: "sonare",
//   age: 25,

// };

// const arr=[20,38,4434];
// call method -> when you use call , you can pass the parameter normally
// console.log(student.getFullName.call(student2));
// console.log(student.getGreetmessage.call(student2, "How are you"));
// // console.log(student.arrowFunction.call(student2, "How are you",""));

// // apply method ->when you use apply , you have to pass params in array
// console.log(student.getGreetmessage.apply(student2, arr));

// // bind -> it returns the new function with specified object
// let bindmethod = student.getGreetmessage.bind(student2, "");
// console.log(bindmethod());


