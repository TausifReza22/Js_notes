//Async Await is a new way to write asynchronous code. It is built on top of promises, so it is also non-blocking.

// console.log("Start");

const start2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Start 2");
    }, 2000);
    // throw new Error("This is an error");
  });
};

const start3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Start 3");
    }, 1000);
  });
};

// start2().then((result) => {
//   console.log(result);

//   start3().then((result) => {
//     console.log(result);

//     console.log("End");
//   });
// });

//async = >> function= > Using this keyword you can make a function asynchronous.

//await = >> promise= > Using this keyword you can wait for a promise to be resolved.

// async function race() {
//   console.log("Start");
// //   console.log("Start 2", start2(), "this is pending in staart 2");
//   let startMethod = await start2();
//   let startMethod2 = await start3();
//   console.log(startMethod);
//   console.log(startMethod2);
//   console.log("End");
// }

// race();

//Difference between a promise and async await is that async await prevents callback hell and makes the code more readable and understandable.

// let container = document.querySelector(".container");
// let getData = async () => {
//   let data = await fetch("https://reqres.in/api/users?page=1");
//   let response = await data.json();
//   let usersData = response.data;
//   //   console.log(response);

//   usersData.map((user) => {
//     let html = ` <div class="user">
//             <h1> ${user.first_name + " " + user.last_name} </h1>
//             <h2> ${user.email}</h2>
//             <img src=${user.avatar} alt="">
//             </div>`;
//     container.innerHTML += html;
//   });
// };

// getData();

// fetch("https://reqres.in/api/users?page=1")
//     .then((response) => {
//       response.json().then((data) => {
//         console.log(data);
//         console.log(data.data[0]);
//       })
//     })
