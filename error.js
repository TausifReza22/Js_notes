//ERRORS IN JAVASCRIPT 
//1. Syntax Error
//2. Reference Error
//3. Type Error


//Syntax Error: It is an error that occurs when the syntax of the code is incorrect. It is a compile-time error.

// let a  = 10;
// console.log(a); //usage  


// Reference Error: It is an error that occurs when a variable is used before it is declared.

// console.log(a); //usage
// let a = 1;  // initializing this a===> Temporal dead zone


// Type Error: It is an error that occurs when a value is not of the expected type.

// let b = 100; //number
// b(); // calling it as a function but it is a number. type error


//Runtime Error: It is an error that occurs during the execution of the code.

// let a = 10;
// console.log(a/0); //usage


//error throwing function

// function throwError(){
    // throw new Error("This is an error");
// }
// throw new Error("This is an error");
// throwError()


//Try Catch Block, Finally = > {   }

//try => block of code that might throw an error. Javscript attempts to execute this code normally
// catch bock=> if an error or exception is thrown inside the try block it is handled in the catch block. This contains the exception code and provides info about the exception.

//finally: => It is optional it is executed regardless the error occured. always will be executed.

// console.log("Before try block");

// try{
//     // console.log(a);
//     let a = 20;
// } catch (error) {
//     // console.log("Cannnot access a before initialization");
//     console.log(error);
// }
// finally{
//     console.log("this is successfully done")
// }

