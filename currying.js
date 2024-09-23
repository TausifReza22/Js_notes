//currying = > function that takes multiple arguments and returns a series of functions that take one argument and return the next function until the last function returns the result.

//breaking a function into multiple smaller return functions.

//regular function

// function multiply(a, b, c) {
//   return a * b * c;
// }
// console.log(multiply(2, 3, 4));

//Currying function

// function curryMultiply(a) {
//     //a=2
//   return function (b) {
//     //a=2, b=3
//     return function (c) {
//         //a=2, b=3, c=4
//       return a * b * c;
//     };
//   };
// }
// console.log(curryMultiply(2)(3)(4));



// let userObj = {
//     name: "John",
//     age: 25
// }

//normal function 
// function getName (obj){
//     return obj.name;
// }
// console.log(getName(userObj));

// function currygetUserProperty(obj){
//     return function(property){
//         return obj[property];
//     }
// }

// console.log(currygetUserProperty(userObj)("age"));



// let userObj = {
//     name: "John",
//     age: 25
// }

//Regular function
// 
// function updateUserName(user,property,value){
//    return user[property] = value;
// }

// updateUserName(userObj,"name","Smith"); 
// console.log(userObj);


//Curried function

// function curryUpdateUserProperty(user){
//     return function(property){
//         return function(value){
//             return user[property] = value;
//         }
//     }
// }

// curryUpdateUserProperty(userObj)("name")("Smith");
// console.log(userObj)



//Currying and chaining difference



//Chaining = > calling multiple functions in a single line. on the resultant of the previous function.


//Triple each element find out the even elements and return the sum of those in a single value
// let arr = [141, 2123, 3, 421, 135, 63, 713,18, 91, 120];

// // //function chaining
// let newVal =  arr.map((val)=> val*3).filter(val=>val%2==0).reduce((acc, curr)=>{
// return acc+curr
// },0)

// console.log(newVal);






