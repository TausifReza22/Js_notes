// Number Methods.
//1. toFixed(2) => It is used to fix the number of decimal places.
//2. toPrecision() => It is used to fix the number of digits.
//3. toString() => It is used to convert a number to a string.
//4. toExponential() => It is used to convert a number to exponential notation.
//5. valueOf() => It is used to return the primitive value of a number.

// let a = 12345; // last number is being rounded off into 6
// console.log(a.toFixed(2), "This is the exponential notation");
// console.log(a.toFixed(2), "This is the fixed number of decimal places");
// console.log(a.toPrecision(2), "This is the fixed number of decimal places");
//Round OFF = > Nearest 10s place

// console.log(a.toExponential(2), "This is the exponential notation");

// console.log(a.valueOf(), "This is the primitive value of a number");





//NaN => Not a number, it is a value that is used to represent a value which is not a number. It is a property of the global object. It is a type of number. It is returned when a mathematical operation is performed on a non-number value. It is used to check whether a value is NaN or not. isNaN(value). Boolean value is returned.

// console.log(10/"a", "This is the value of NaN");
// console.log(typeof NaN, "This is the type of NaN");

//isNaN() => It is used to check whether a value is NaN or not. isNaN(value). Boolean value is returned.

// console.log(isNaN(123), "This is the value of isNaN");
// console.log(isNaN(''), "This is the value of isNaN"); //false is converted into 0

// console.log(NaN===NaN)
// console.log(undefined===undefined)
// console.log(null===null)


// console.log( typeof ('10' + 5));



let str = "Hello, World!";
console.log(str.slice(7, 12));

// let str = "Hello, World!";
// console.log(str.length);