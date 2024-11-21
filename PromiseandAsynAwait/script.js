// Promise => is an object which represends the eventually completion or failure of async operation
// states of promise
// Pending => it is still in progress (neither fullfilled nor rejected)
// Fulfilled => it is completed succesfully (resolved promise)
// Rejected => Error in your promise and got rejected

let result = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let x = 2;
    if (x > 5) {
      reject("Promise is rejected");
    } else {
      resolve("Promise is resolved");
    }
  }, 3000);
});



result
.then((succes) => {
  console.log(succes);
})
.catch((onError) => {
  console.log("Error", onError);
});

console.log("printed");
console.log("printed");
console.log("printed");
console.log("printed");
console.log("printed");
console.log("printed");
console.log("printed");
console.log("printed");
console.log("printed");
console.log("printed");
console.log("printed");
console.log("printed");
console.log("printed");
console.log("printed");
console.log("printed");
console.log("printed");
console.log("printed");
console.log("printed");
console.log("printed");
console.log("printed");




// async/await

// Promise => promise is object which represends teh eventual completion or failure of a async operation\
//    states of promises
//  1.Pending -> it is still in progress(neither fullfiled nor rejected)
//  2.Fullfilled -> it it completed successfully(resolved promise)
//  3. Rejected  -> Error in yoor promises

// let res = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let x = 2;
//     if (x > 5) {
//       reject("X is greater than 5");
//     } else {
//       resolve("X is less than 5");
//     }
//   }, 3000);
// });

// console.log(res);

// res
//   .then(function (onSuccess) {
//     console.log(onSuccess);
//   })
//   .catch(function (onError) {
//     console.log("error", onError);
//   });

// Async/await
//fetch();
//axios();
//HTTPrequest

//CRUD
//create
// Read
// update
// delete
