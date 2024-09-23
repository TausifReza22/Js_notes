// for loop, while, do while

//Entry controlled loop:  the condition is checked and then the operation is performed. FOR AND WHILE LOOP
// for loop

//For Loop
// for(let i=0; i<=a; i++){
//     console.log("hello")
//  alert("This is the value of i");
// }

//While Loop

// let i = 1;
// while (i <= a) {
//   console.log("This is a while loop");
//   i++;
// }

//Do While Loop
//do{

//}while(condition);
//EXIT Control Loop :The operation is done and then the condition is checked. Do while loop

// let a = 3;
// let i = 45;

// do{
//     console.log("This is a do while loop the value is", i);
//     i++;
// }while(i<=a);



//FOR of loop: It loops through the values of the string or array(iterable object=> Cheez, thing).
// const arr = [1,2,3,54,"string"];
// // console.log(arr[3]);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let i of arr) {
//   console.log(i+1);
// }



//OBJECTS ARE NOT ITERABLE IN JS

//For In loops in JS: It loops through the properties of an object.

// let obj = {
//   name: "Ankush",
//   age: 40,
//   isMarried: true,
//   role: "Manager",
// };

// for (let key in obj) {
//   console.log(obj[key]);
// }


//FOR EACH LOOP :  For arrays only

// it does not return anything
//modify the original array
//operations on array elements


// let arr = [1,2,3,4,5,6,7,8];

// let resultArr = [];
//  let newArr = arr.forEach((value,index)=>{
//     // resultArr.push(value*2);
//     arr[index] = value*2;
// })
// console.log(arr, "This is the new array");