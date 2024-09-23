//Hoisting: The declarations are moved to the top of their scope. It is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// console.log(a); //usage
// /// Reached here and not found this a variable because a is in a temporal dead zone.

// var a;
// // console.log(a);
// // Temporal dead zone: The time between the start of the block and the actual declaration of the variable is called the temporal dead zone.

// sum();
// var sum = function (){
//     console.log("Hello");
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   readline.question('Who are you?', name => {
//     console.log(`Hey there ${name}!`);
//        readline.close();
//   })

// console.log(a)
// var a = 20;

// FUNCTION DECLARATIONS ARE HOISTED, FUNCTION EXPRESSIONS ARE NOT HOISTED.

// sum();
// var abc = undefined;
// abc();
// // When we are declaring a function directly this is called a function declaration.
// function sum() {
//   console.log("THIS IS THE FUNCTION DECLARATION");
// }

// //Function expression: When you are expressing a function inside a variable it is called the function expression.

// console.log(abc, "The value of abc"); // It will give undefined
// abc(); // It will give error BECAUSE THE UNDEFINED CANNOT BE CALLED AS A FUNCTION
// var abc = function () {
//   console.log("THIS IS THE FUNCTION EXPRESSION");
// };


//  LET AND CONST DECLARATIONS ARE NOT HOISTED. THEY ARE IN THE TEMPORAL DEAD ZONE.
// console.log(a); // using this a
// let a = 10;  // initializing this a===> Temporal dead zone
// // console.log(a);
// // console.log(B); // using this a
// // let b = 10;  // initializing this a===> Temporal dead zone
// // console.log(b);
// console.log(some); // using this ""
// var some = 10;

// abc(); // undefined => can you call an undefined variable as a funciton? NO

//  var abc = function hoistedFunc(){
//     console.log("This is the hoisted function");
// }





//HOISTING : The declarations are moved to the top of their scope. It is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// console.log(a); //usage
// const a = 10;  // they are moved to the temporal dead zone

//function hoisting
//The function declarations are hoisted to the top of their scope.


// function sum() {
// console.log("This is a function hoisting")
// }

//The function expressions are not hoisted to the top of their scope.


// var sum = ()=>{
//     console.log("This is a function hoisting")
// }
// sum()




//The declarations are moved to the top of their scope. It is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// console.log(a); //usage
// const a = 10
// add = undefined
// add()
//  let add = function (){
//     console.log("This is a function declaration")
// }
































