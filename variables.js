// In JavaScript, there are three main ways to declare variables: var, let, and const. These declarations allow you to create variables with different characteristics and scopes.


// Using var
var name = "John Doe";
var age = 30;
var isAdult = true;

// Using let
let city = "New York";
let population = 8000000;
let isBigCity = true;

// Using const
const PI = 3.14159;
const MAX_SIZE = 100;
const IS_ACTIVE = true;




// var declaration:

// Variables declared with var have function scope or global scope, depending on where they are declared.
// Function scope means that the variable is accessible within the function it is declared in, as well as any nested functions.
// Global scope means that the variable is accessible throughout the entire program.
// Variables declared with var are hoisted to the top of their scope, which means they can be accessed before they are declared.
// However, var variables can be redeclared and reassigned within their scope.




// let declaration:
// The let keyword was introduced in ES6 (ECMAScript 2015) and provides block scope.
// Block scope means that the variable is only accessible within the block it is declared in, such as within a function, loop, or conditional statement.
// Variables declared with let can be reassigned, but they cannot be redeclared within the same block.




// const declaration:

// The const keyword is also introduced in ES6 and stands for "constant".
// Variables declared with const are block-scoped and cannot be reassigned after they are declared.
// If the variable is an object or an array, its properties or elements can still be modified.