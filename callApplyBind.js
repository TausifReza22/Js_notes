//call apply bind

//Call method is used to call a method of an object with another object as an argument.

//this keyword is used to refer to the object that is calling the method.

// let shivansh = {
//   name: "Shivansh",
//   class: 10,
//   getName: function () {
//     return this.name;
//   },
// };
// console.log(shivansh.getName());

// let muktai = {
//     name: "Muktai",
//     class: 11,
// }


//call method

//syntax => function.call(object)
// console.log(shivansh.getName.call(muktai)) //Muktai;

// let shivansh = {
//     name: "Shivansh",
//     class: 10,
//     age: 25
// };

// let muktai = {
//     name: "Muktai",
//     class: 12,
//     age: 26
// }

// function getAge(){
//     return this.age;
// }

// // console.log(getAge.call(muktai)) //25


// function getDetails(city, food){
//     return this.name + " is from " + city+" likes "+ food;
// }

// console.log(getDetails.call(shivansh,"Sringar", "mix veg")) //Shivansh is from Sringar

// console.log(getDetails.call(muktai,"Pune", "Rajma")) //Muktai is from Jammu

//error
// console.log(shivansh.getAge())

//syntax=  function.call(object)

// console.log(getAge.call(shivansh)) //25
// console.log(getAge.call(muktai)) //26

//apply methhod is used to call a method of an object with another object as an argument. The only difference between call and apply is that call takes arguments separately whereas apply takes arguments as an array.

// let shivansh = {
//   name: "Shivansh",
//   class: 10,
//   age: 25,
// };

// let muktai = {
//   name: "Muktai",
//   class: 12,
//   age: 26,
//   getDetails: function (city, food) {
//     return this.name + " is from " + city + " likes " + food;
//   },
// };

//  muktai.getDetails.apply(shivansh, ["Jammu", "Rajma"]);


//bind method is used to bind a method to an object. It returns a new function that can be called later.

// const shivanshDetails = muktai.getDetails.bind(shivansh, "Jammu", "Rajma");

// const shivanshCall = muktai.getDetails.call(shivansh, "Jammu", "Rajma");

// console.log(shivanshCall)
// console.log(shivanshDetails());


//Difference between call apply and Bind

//Call and apply are used to call a method of an object with another object as an argument. The only difference between call and apply is that call takes arguments separately whereas apply takes arguments as an array.

//Bind method is used to bind a method to an object. It returns a new function that can be called later.

//Call and apply are used to call a method of an object with another object as an argument. The only difference between call and apply is that call takes arguments separately whereas apply takes arguments as an array.


//invocation

//call immediately invokes the function
//apply immediately invokes the function
//bind does not immediately invoke the function. It returns a new function that can be called later.

//Arguments

//call takes arguments separately
//apply takes arguments as an array
//bind does not take arguments immediately

//execution

//call and apply immediately execute the function
//bind does not immediately execute the function. It returns a new function that can be called later.


//return value

//call and apply return the value of the function
//bind returns a new function that can be called later.