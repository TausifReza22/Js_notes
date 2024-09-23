//Web APIs : DOM, AJAX, Timers, Fetch,  Storage, Notifications, Audio/Video, Canvas/SVG, Geolocation etc.

//API = Application Programming Interface

//AJAX =  asynchronous JavaScript and XML
//AJAX is not a programming language.

// JAVASCRIPT IS A SINGLE THREADED SYNC LANGUAGE

//Using Async Javascript we can make it behave like a multi-threaded language.

//Timers  => setTimeout, setInterval, clearInterval, clearTimeout

// 1 SETTIMEOUT  =  > MACRO TASK

//Set time out => It is used to run a function after a certain amount of time.
//SETTIMEOUT(CALLBACKFUNCTION, TIME IN MS);
// setTimeout(()=>{
//     console.log("I am a setTimeout function");
// })
// setTimeout(callMe,0); // CHAL WAIT KARO 3 SECONDS
// setTimeout(callMeS,0); // CHAL WAIT KARO 3 SECONDS
// setTimeout(callMeT,0);

// function callMe(){
//     console.log("I am a 1 function");
// }
// function callMeS(){
//     console.log("I am a 2 function");
// }
// function callMeT(){
//     console.log("I am a 3 function");
// }
// //1second = 1000ms
// console.log("This is first");
//  // CHAL WAIT KARO 3 SECONDS
// console.log("This is Last");

// first >> settimeout>>  last
// first >>  last >>  settimeout

//restraunt example

// console.log("I am a customer");
// console.log("Came to restraunt");
// console.log("Ordered  rasmalai");
// //cooking will take 5 seconds
// //I will wait for 5 seconds not on the kitchen door, I can waitt and do other things
// setTimeout(()=>{
//     console.log("Rasmalai is ready");
//     console.log("I will eat it now");
//     console.log("I am leaving the restraunt");
// },5000);

// console.log("I am doing other things");

// 2 SETINTERVAL  =  > MACRO TASK

// setInterval => It is used to run a function after a certain amount of time repeatedly.

setInterval(()=>{

    console.log("I am a setInterval function");

},1000)

// let callbackFN = ()=>{
//     console.log("I am a setInterval function");
// }
// setInterval(callbackFN,2000);

// console.log("first");
// console.log("second");
// console.log("third");

// 3 CLEARINTERVAL  =  > MACRO TASK It is used to stop the setInterval function.

// let count = 0;

// let counterInterval = setInterval(() => {
//   count++;
//   console.log("The current Count value is ", count);
// }, 1000);

// //To  do is I want to stop the setInterval after 5 seconds.
// let callbackFn = () => {
//   clearInterval(counterInterval); // It will stop the CounterInterval
//   console.log("This is the final value of count after 5 seconds", count);
// };

// setTimeout(callbackFn, 5000);



