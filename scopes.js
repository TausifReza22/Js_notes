//SCOPES IN JAVSCRIPT : The area of accessibility of a variable is called a scope.

//1. function scope: the variable declared inside the function is called a function scope. var is a function scope variable.
//2. block scope: the variable declared inside the block is called a block scope. let and const
//3. global scope: the variable declared outside the function is called a global scope.

//globally declared: That can be used anywhere in the program.
// const globalVal = "Accessible anywhere";
//Block Scope
// {
//   const globalVal = "Accessible anywhere";
// } // BLock means {     }

// function sum() {
//   console.log(globalVal, " This is inside a function");
// }
// sum();
// {
//   console.log(globalVal, " THis is inside a block");
// }

//function scope
// function sum() {
//   if (true) {
//      globalVal = "Accessible anywhere";
//     console.log(globalVal, " This is inside a function");
//   }
//   console.log(globalVal, " THis is inside a block");
// }

// sum();
// console.log(globalVal, " THis is Outside a function and block")

// var fullName="shivansh";
// function myfullName(){
//    fullName="rawat"
//     console.log(fullName)
// }
//  var fullName="rawat";
// console.log(fullName)
// // myfullName()//>> rawat >> fullName>> rawat

// let sdf = "shivansh";

// const something;
// something=  "shivansh";
// console.log(something);

// {
//   var a = 20;

//   // function sum() {
//   //   if (true) {
//   //     var globalVal = "Accessible anywhere";
//   //     console.log(globalVal, " This is inside a function");
//   //   }
//   //   console.log(globalVal, " THis is inside a block");
//   // }
// }

// console.log(a)

