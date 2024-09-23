//closure is a function that makes use of variables defined in outer functions that have previously returned

//Hoisiting = > You are able to access a global variable inside any function. But you cannot access a local variable outside the function.

// let a = 32094;

// function abc(){
//     return function bcd(){
//         console.log(a);
//         let b = 123
//     }
// }
// console.log(b);
// abc()()



//lexical environment

// A closure is a combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// function outer() {
//   let counter = 0;
//   return function incrementCounter() {
//     counter++;
//     console.log(counter);
//   };
// }

//write a function in which you have a counter but it should log the counter only if the value is 3.

// function counter(){
//     let count = 1;
//     if(count%3 == 0){
//         console.log("This is printing", count)
//     }else{
//         count++;
//         console.log("This is not printing", count)
//     }
// }

// counter() // count = 1
// counter() // count = 1
// counter() // count = 1

// function counter() {
//   let count = 1;
//    function increment() {
//     if (count === 3) {
//       console.log("this is printing", count );
//     } else {
//       console.log("this is not printing", count);
//     }
//     count++;
//   };
//   return increment;
// }

// let incrementCounter = counter()
// // console.log(counter())
// incrementCounter()
// incrementCounter()
// incrementCounter()


// let a = 2;

// function outer(){
//   let b = 20;
//    function inner(){
//        console.log(a,b)
//    }
//    return inner;
// }