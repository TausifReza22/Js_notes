// let button = document.querySelector("button");
// //throttling => It is used to limit the number of times a function can be called over time. It is used to improve the performance of the application.

// function fire() {
//   button.disabled = false;
//   console.log("Fire");
// }

// const mythrottle = (fn, delay) => {
//   let lastCall = 0; // PREVIOUS CALL HUA HAI AGAR TO 1867892897
//   return function (...args) {
//     const now = new Date().getTime(); // 1867892897 ABHI KI VALUE
//     if (now - lastCall < delay) {
//       return;
//     } // If called again within delay, ignore THE CALL

//     lastCall = now; //1867892897
//     fn();
//   };
// };

// button.addEventListener("click", mythrottle(fire, 3000));

let button = document.querySelector("button");






//throttling => It is used to limit the number of times a function can be called over time. It is used to improve the performance of the application.

//NOT OPTIMIZED LOGIC FOR THROTTELING PLEASE REFER THE ABOVE EXAMPLE THIS IS JUST FOR EXPLANATION

function fire() {
    
  button.disabled = false;
  console.log("Fire");
}

const mythrottle = (fn, delay) => {
    console.log("This is running")
  return function (...args) {
    button.disabled = true;
    setTimeout(() => {
      fn();
    }, delay);
  };
};
 //button.addEventListener("click", fire);

button.addEventListener("click", mythrottle(fire, 3000));
