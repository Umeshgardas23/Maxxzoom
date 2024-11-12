// Event listeners to detect connectivity changes
window.addEventListener("online", () => console.log("Back online!"));
window.addEventListener("offline", () => console.log("Lost connection."));

function myfun() {
  console.log(this);
}
let data = () => {
  console.log(this);
};

console.log(this);

myfun();

// This Keyword
//  2 ways of functions
// Normal funcion -> by using different method

//  Arrow function -> this will never change whatever it is

const student = {
  id: 2,
  firstname: "Anuj",
  lastname: "shinde",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
  getGreetmessage: function (mess) {
    return this.firstname + " " + "Welcome" + " " + mess;
  },
  arrowFunction: () => {
    return this.firstname + " " + "arrow" + " ";
  }
};





