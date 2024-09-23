// Datatypes in javascript
// let number = 10.5;
// 1. Number => 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.5, 10.6, 10.7, 10.8, 10.9, 11;  truthy value
// 2. String => "Hello", "World", "Hello World", "Hello World 123", "Hello World 123.456"; truthy value
// let string = "hello";
// 3. Boolean => true, false;
// 4. Undefined => undefined;
// let a;
////console.log(a); // undefined
// 5. Null => null; falsy value
// let b = null;
////console.log(b); // null falsy value
// 6. Object => {key: 'value'}; truthy value

let muktai = {
  name: "Muktai",
  age: 25,
  isMarried: false,
  role: "Software Engineer",
};
let num = 123123123;
let str = 'The value of num is : num'; 
// console.log(str);
let string2 = `This is the value of muktai: ${num}`// Template literals
// console.log(string2);
// 

// Object is a collection of key-value pairs. It can store multiple values in a single variable.

let manoj = {
  name: "Manoj",
  age: 30,
  isMarried: true,
  role: "QA",
};

let ankush = {
  name: "Ankush",
  age: 40,
  isMarried: true,
  role: "Manager",
};
//JSON
ankush['role'] = "Software Engineer";
// console.log(ankush)

//console.log(manoj.role, "This is Manoj's role");

//console.log(ankush.role, "This is Ankush's role");

// 7. Array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; truthy value
// Array is a collection of data. It can store multiple values in a single variable.

// let arr = [
//   1,
//   2,
//   3,
//   [1, 2, 23, 4],
//   4,
//   5,
//   "6",
//   7,
//   {
//     name: "Muktai",
//     age: 25,
//     isMarried: false,
//     role: "Software Engineer",
//   },
//   9,
//   10,
// ];

//console.log(arr);

// Function is a block of code that can be reused. It can take parameters and return value it may not return a value.

// keywords are reserved words in javascript. They have special meaning in javascript. They cannot be used as variable names, function names, or any other identifiers.

let num1 = 10;
let num2 = 20;
let num3 = 30;

//parameters are the names listed in the function definition.
//arguments are the real values passed to the function.

// Function Declaration

function addition(a, b, c) {
  console.log(a, b, c,d);
  return a + b + c;
}

//calling a function
// console.log(addition(num1, num2, num3),"yhis is a first call");
// console.log(addition(20, 30, 40),"this is a second call");
// console.log(addition(30, 40, 50),"this is a third call");

// Function Expression
let expressedFunction = addition;

//console.log(expressedFunction(10, 20, 30),"This is a function expression");

// PRIMITVE AND NON PRIMITIVE DATATYPES

// 1. Primitive Datatypes => Number, String, Boolean, Undefined, Null
// 2. Non Primitive Datatypes => Object, Array, Function

// Primitive Datatypes are immutable. They cannot be changed. If we change the value of a primitive datatype, it will create a new value in the memory.

// Non Primitive Datatypes are mutable. They can be changed. If we change the value of a non primitive datatype, it will not create a new value in the memory.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let stringType = "Shivansh"
array[1] = "H";
// console.log(array);

//OPERATORS IN JAVASCRIPT

// 1. Arithmetic Operators => +, -, **, /, %, ++, --;

// console.log(value1+(+value2), "This is addition operator");

// 2. Assignment Operators => =, +=, -=, *=, /=, %=, **=;

//3 Comparision operators => ==, ===, !=, !==, >, <, >=, <=;

// let value1 = 1;
// let value2 = "1";
// console.log(value1 !== value2, "This is a comparision operator");

// 4. Logical Operators => &&, ||, !;

//! this is called a negation operator

// let value1=1; //number
// let value2 = "1"; //string

// console.log(value1);

// if(!value1){
//   console.log("This is a TRUE");
// }else{
//   console.log("This is FALSE");
// }

// Special Operator : typeof operator,? ternary operator ??.

//Integers : Numbers

let value1 = [] //number
let value2 = "value 2"; //string

value1===value2?console.log("This is a TRUE") : console.log("This is FALSE");


//condtion?true:false  checks for null and undefined
// value1==value2?console.log("This is a TRUE"): console.log("This is FALSE");
//let value = false??default
let abc = value1 ?? value2;
// console.log(typeof abc);

if(value1===value2){
  console.log("This is a TRUE");
}else{
  console.log("This is FALSE","This is used as a comma ");
}
//SWITCH STATEMENTS

// let a = 4+4+5;
// switch (a) {
//   case 1:
//     console.log("This is a case 1");
//     break;`

//   case 2:
//     console.log("This is a case 2");
//     break;

//   default:
//     console.log("This is a default case");
//     break;
// }

// Interaction through javascript: alert, prompt, confirm

// alert("This is an alert box");// notifies the user
// prompt("This is a prompt box"); //returns anything "string" or number
// confirm("This is a confirm box"); //returns a boolean

// let value = confirm("Enter Your age");

// console.log(value,"This is the value of the prompt box");

let x= "5";
let y = 5;
if(x==y){
  console.log(x+y);
}else{
  console.log("This is a false statement");
}