// let a = {
//     name: "John",
//     age: 25
//     };
//     let b = a;

//     b.class = "10th";
//     console.log(a);

// Non primitive data types are passed by reference = > or address is passed

//Shallow copy: creates a new object and copies the reference of the original object.

//shallow copy works fine for the first level of object but if the object has nested objects then it will not work properly.

// let arr = [1, 2,[23,34], 3, 4, 5];
// let newArr =  arr.slice();
// newArr[2][2]= 100000;
// console.log(newArr, arr);

// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];
// newArr[2] = 100000;
// console.log(newArr, arr);

//Deep copy: creates a new object and copies the values of the original object.

//Deep copy works fine for the nested objects as well.  JSON.parse(JSON.stringify(object))

// let arr = [1, 2,[23,34], 3, 4, 5];
// let newArr =  JSON.parse(JSON.stringify(arr));

// newArr[2][1]= 100000;

// console.log(newArr, arr);

// let a = 1000;
// let b = a;

// function add (){
//     console.log(a);
//     var a=1209;
//     console.log(a);

// }
// add()

function first() {
  console.log("first");
  second();
}

function second() {
  console.log("second");
}

first();
