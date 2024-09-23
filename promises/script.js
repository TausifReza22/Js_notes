//Promise => It is an object represent eventual completion or failure of an asynchronous operation and its resulting value.

//eg:"I promise I will do this"  => resolve, reject, pending

// results:  fullfilled, rejected, pending

//what is asymchronous code?
//Asynchronous code allows the program to execute without waiting for the completion of another operation.

//that may produce a single value some time in the future: either a resolved value or a reason that it's not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending.

//How to create  a promise?

// const promise = new Promise((resolve, reject) => {
//     reject("Promise is fullfilled");
// });
// console.log(promise);

//promise is a constructor function that takes a callback function as an argument. The callback function takes two arguments, resolve and reject. These are methods used to determine the outcome of the promise.

//resolve: This is called when the promise is resolved, i.e., the asynchronous operation was successful.

//reject: This is called when the promise is rejected, i.e., the asynchronous operation failed.

// let promise = new Promise((resolve, reject) => {
//   let a = 1 + 5;
//   if (a == 2) {
//     resolve("Class is taken");
//   } else {
//     reject("Class is not taken");
//   }
// });

//then = > After
//resolve and reject are used to control the outcome of the promise.
//then and catch is used to handle the outcome of the promise.

//then is a method that takes two optional arguments: a callback function for the success case.
// console.log(promise);
// promise.then((message)=>{
//     console.log( message);
//     console.log("I have to revise the class");
// })
// .catch((error)=>{
//     console.log("He didn't took the session " + error);
// })

///RESTRAUNT EXAMPLE = > Stimulating an async operation of cooking and serving food in a restraunt.

//It takes some time to prepare food.

// const prepareFood = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Food is ready");
//     }, 1000);
//   });
// };

// // // Time taking to serve the food on table

// const serveFood = () => {
//   return new Promise((resolve, reject) => {
//     //representing the delay of 4 seconds
//     setTimeout(() => {
//       resolve("Food is Served");
//     }, 2000);
//   });
// };

// const eatingFood = () => {
//   return new Promise((resolve, reject) => {
//     //representing the delay of 4 seconds
//     setTimeout(() => {
//       resolve("Food is eaten");
//     }, 3000);
//   });
// };

// console.log("I went to a restaurant");

// console.log("I am ordering food");
// //promise fullfilled
// prepareFood()
//   .then((message) => {
//     console.log(message);

//     serveFood().then((message) => {
//       console.log(message);

//       eatingFood().then((message) => {
//         console.log(message);

//         console.log("I am leaving the restaurant");
//       });
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//STATES OF PROMISE => Pending, Fullfilled, Rejected

//Pending => Promise is pending => Not yet fullfilled or rejected

// const promise = new Promise((resolve, reject) => {})
// console.log(promise);

//FUlfilled => Promise is fullfilled = > Completed successfully

// const promise = new Promise((resolve, reject) => {
// resolve("Promise is fullfilled");
// });
// console.log(promise);

//Rejected => Promise is rejected => Failed
// const promise = new Promise((resolve, reject) => {
//   reject("Promise is rejected");
// });

// console.log (promise);
// // promise.then((message) => {console.log("Promise is ")})
// promise.catch((message) => {
// //    throw new Error(message);
//     // console.error(message);
//     console.log(message);
// });

//Promise.all => It takes an array of promises and returns a single promise. It is fullfilled when all the promises in the array are fullfilled. If any of the promises in the array is rejected, the promise returned by Promise.all is rejected.

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1 is fullfilled");
//     }, 1000);
// })
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 2 is Rejected");
//     }, 2000);
// })
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 3 is fullfilled");
//     }, 3000);
// })

// Promise.all([promise1, promise2, promise3])
// .then((message)=>{
//     console.log(message);
// })
// .catch((error)=>{
//     console.log(error)
// })

//Promise.race => It takes an array of promises and returns a single promise. It is fullfilled or rejected as soon as one of the promises in the array is fullfilled or rejected.

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1 is fullfilled");
//     }, 1000);
// })
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 2 is Rejected");
//     }, 500);
// })
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 3 is fullfilled");
//     }, 3000);
// })

// Promise.race([promise1, promise2, promise3])
// .then((message)=>{
//     console.log(message);
// })
// .catch((error)=>{
//     console.log(error)
// })
