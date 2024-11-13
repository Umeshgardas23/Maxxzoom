const arr = [20, 38, 4434];

const student = {
  id: 2,
  firstname: "Anuj",
  lastname: "shinde",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
 
  arrowFunction: () => {
    return this.firstname + " " + "arrow" + " ";
  },
};

// console.log(student.getFullName());
// console.log(student.arrowFunction());

const student2 = {
  firstname: "amit",
  lastname: "sonare",
  age: 25,
  getGreetmessage: function (mess) {
    return this.firstname + " " + "Welcome" + " " + mess;
  },
};
const student3 = {
  firstname: "sourabh",
  lastname: "sonare",
  age: 25,

};
// call method -> when you use call , you can pass the parameter normally
// console.log(student.getFullName.call(student3));
// console.log(student2.getGreetmessage.call(student,"heylooo"));
// console.log(student.arrowFunction.call(student2, "How are you", ""));

// // apply method ->when you use apply , you have to pass params in array
// console.log(student2.getGreetmessage.apply(student3, ["arr","Arr2"]));

// // bind -> it returns the new function with specified object
let bindmethod = student2.getGreetmessage.bind(student3, "hjjjj");
console.log(bindmethod());
