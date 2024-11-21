// Clousure => a function is bine together with its lexical environment/parent function 

// Lexical environment
var a = 7;

function d() {
  function myfun() {
    var b = 8;
    function y() {
       
      console.log(a, b);
    }
    // a = 30;
    y();
  }
  myfun();
}

let z = d;
console.log(z());
console.log("logg");
console.log("logg");
console.log("logg");
console.log("logg");
console.log("logg");
console.log("logg");
console.log("logg");
console.log("logg");
console.log("logg");
console.log("logg");
console.log(z());
