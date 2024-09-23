//Javascript Object : These are the variables in which the value is stored in a key-value pair. Collection of Properties.  {key:"value"}

// let student = {
//     "first Name": 'John',
//     lastName: 'Doe',
//     age: 20,
//     grades: ['A', 'B', 'A', 'C'],
//     getFullName: function() {
//         return this.firstName + ' ' + this.lastName;
//     }
// };

//Accessing a property of an object

//2 types of accessing the properties of an object
//1. Dot notation
//2. Bracket notation

//Dot notation
// console.log(student.lastName);

//Bracket notation
// console.log(student["first Name"]);



//this is a keyword in JS which refers to the object that is executing the current function.

// let student = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 20,
//   grades: ["A", "B", "A", "C"],

//   getFullName: function () {
//     console.log(this);
//        return this.firstName + " " + this.lastName;
//   },
// };

//no parent it is inside the global object
// function something(){
//     console.log(this);
// }

// something();

// console.log(student.getFullName());



//Tyeps of Object declaration in JS

//1. Object Literal = > {}
//2. Object Constructor
//3. Object.create()
//4. Factory Method


//Object Literal

// let student = {
//   firstName: "John",
//   lastName: "Doe",
// }; //Empty object , object literal

// let ankushCar = {
//     carColor: "Black",
//     modelName: "BMW Q3",
//     manufactureYear: 2024, 
// }
// let rohit = {
//     carColor: "asd",
//     modelName: "BMasdW Q3",
//     manufactureYear: 221024, 
// }
// let roshni = {
//     carColor: "asd",
//     modelName: "BMasdW Q3",
//     manufactureYear: 221024, 
// }


//Object Constructor

// function Car(color, model, year) {
//   this.carColor = color;
//   this.modelName = model;
//   this.manufactureYear = year;
// }

// //new keyword is used to create an instance of an object. //constructor function

// let myCar = new Car("Black","BMW Q3",2024);
// let ankushCar = new Car("Red","Audi",2022)

// console.log(myCar.carColor);
// console.log(ankushCar);


//Factory Method:
//It returns a new object. It is a function that returns an object. without using new and we are using a return keyword to return an object which simplifies the code.

// function createCar(color, model, year){
//     return {
//         carColor: color,
//         modelName: model,
//         manufactureYear: year,
//     }
// }

// let myCar = createCar("Black","BMW Q3",2024);
// let ankushCar = createCar("red","audi Q3",2214);
// console.log(ankushCar)



//Object.create() : It is used to create a new object with the specified prototype object and properties.
//prototype object is the object from which the new object inherits the properties.smaller version.

// let car = {
//     carColor: "Black",
//     modelName: "BMW Q3",
//     manufactureYear: 2024,
// }

// let myCar = Object.create(car);
// // myCar.carColor = "Red";

// console.log(myCar.carColor);


//Object Methods in JS

//1. Object.keys() => It is used to return an array of the object's own enumerable properties. keys in array
//2. Object.values() => It is used to return an array of the object's own enumerable property values. values in array
//3. Object.entries() => It is used to return an array of the object's own enumerable property [key, value] pairs. key value pair in array


//Object.keys()

// let student = {
//     firstName: "Shivansh",
//     lastName:"Rawat",
//     age: 20,
//     bloodGroup: "O+"
// }

// let keys = Object.keys(student);
// console.log(keys, "This was the keys array");

// //Object.values()
// let values = Object.values(student);
// console.log(values, "This is values array");

// Object.entries(student)
// let entries = Object.entries(student);
// console.log(entries, "This is entries array");


//TOPIC == > JSON `JavaScript Object Notation`

//JSON is a lightweight data interchange format. 



//JSON.parse => It is used to convert a JSON string to a JavaScript object.


// let student = '{"firstname":"Shivansh", "lastname":"Rawat", "age":"20"}';

//  student = JSON.parse(student);

//{firstname:"Shivansh", lastname:"Rawat", age:"20"}
// let arr = "[1,23,4,45,5]"
// arr = JSON.parse(arr);
// console.log( arr[2], "This is a string");

// console.log( student, "This is a object");

// //JSON.stringify => It is used to convert a JavaScript object to a JSON string.

// student = JSON.stringify(student);


// console.log(student, "This is a string");





