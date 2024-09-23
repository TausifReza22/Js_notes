//Macro Task: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering, Task with lower priority

//Micro Task: process.nextTick, Promises, Object.observe, MutationObserver these are tasks with higher priority

// setTimeout(() => {
//   console.log("I am a setTimeout");
// });

// let promise = new Promise((resolve, reject) => {
//   resolve("Promise is resolved");
// });

// promise.then((data) => {
//   console.log(data);
// });

// function first() {
//   console.log("First");
// }
// first();

//Javascript is a single threaded language that can be non-blocking.

//javascript always executes synchronous code first and then executes asynchronous code.  funcion calls, calculations, loops, etc are synchronous code.

//After executing the synchronous code, javascript executes the asynchronous code. Asynchronous code is executed in the event loop.

//Async code = > setTimeout, setInterval, Promises, fetch, etc.

//queue: first in first out

//Microtask queue: promises

//Macrotask queue: setTimeout, setInterval, setImmediate, requestAnimationFrame,

//promises are having the higer priiority than the setTimeout, setInterval, etc.

//In async code the promises are resolved in the microtask queue and the setTimeout, setInterval, etc are resolved in the macrotask queue.

let settimeout; // third execute priority is less  ==> MOVED TO MACROTASK QUEUE, These dont go to call stack directly

let promise; // second execute priority is more ==> MOVED TO MICROTASK QUEUE. These dont go to call stack directly

let sum = 1212389721 + 1236512;
console.log(sum); // it will be executed first

//Event Loop is a mechanism that makes sure that the code runs in the correct order.
//event loop is responsible for executing the code, collecting the events, and executing the queued tasks.
setTimeout(() => {
    console.log("I am execuiting after 3 seconds");
  }, 3000);
  
setTimeout(() => {
  console.log("I am execuiting after 1 second");
}, 1000);

setTimeout(() => {
  console.log("I am execuiting after 2 seconds");
}, 2000);

console.log("This is written after the setTimeouts");