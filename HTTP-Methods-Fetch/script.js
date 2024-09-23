//HTTP => Hypertext Transfer Protocol

//Server = > Server is a computer that provides services to other computers in the same or other computers.

//HTTP Methods = these are the verbs that we use to interact with the server

//GET, POST, PUT, DELETE

// Get Method = > It is used to get the data from the server

//POST Method => It is used to send the data to the server  ==> create new data

//PUT Method => It is used to update the data on the server => update the existing data

//DELETE Method => It is used to delete the data from the server => delete the existing data

//Fetch API => It is used to make the request to the server.
//it provides an interface for fetching resources asynchronously across the network.
//It uses a  promise or it returns a promise

//url = https://reqres.in/api/users?page=1

let btn = document.querySelector("button");

//CAllback hell => It is a situation where the code is written in a nested manner and it becomes difficult to read and understand the code.
btn.addEventListener("click", () => {
    
  fetch("https://reqres.in/api/users?page=1")
    .then((response) => {
      response.json().then((data) => {
        console.log(data);
        // console.log(data.data[0]);
        // let userData = data.data[0];

        //Data of the first user
        // let firstName = userData.first_name;
        // let lastName = userData.last_name;
        // let email = userData.email;
        // let avatar = userData.avatar;

        // console.log(firstName, lastName);

        //         let container = document.querySelector(".container");

        //         container.innerHTML = ` <h1> ${firstName+" "+ lastName} </h1>
        //                                <h2> ${email}</h2>
        //                                <img src=${avatar} alt="">
        // `;

        let usersData = data.data;
        // console.log(usersData);

        usersData.map((user) => {
          let html = ` <div class="user">
            <h1> ${user.first_name + " " + user.last_name} </h1>
            <h2> ${user.email}</h2>
            <img src=${user.avatar} alt="">
            </div>`;

          let container = document.querySelector(".container");

          //   container.innerHTML = container.innerHTML + html;

          container.innerHTML += html;
        });
      });
    })
    .catch((err) => {
      console.log("This is the error ", err);
    });
});

// // console.log(fetch('https://reqres.in/api/users?page=1'));

// [
//   {
//     id: 1,
//     email: "george.bluth@reqres.in",
//     first_name: "George",
//     last_name: "Bluth",
//     avatar: "https://reqres.in/img/faces/1-image.jpg",
//   },
//   {
//     id: 2,
//     email: "janet.weaver@reqres.in",
//     first_name: "Janet",
//     last_name: "Weaver",
//     avatar: "https://reqres.in/img/faces/2-image.jpg",
//   },
//   {
//     id: 3,
//     email: "emma.wong@reqres.in",
//     first_name: "Emma",
//     last_name: "Wong",
//     avatar: "https://reqres.in/img/faces/3-image.jpg",
//   },
//   {
//     id: 4,
//     email: "eve.holt@reqres.in",
//     first_name: "Eve",
//     last_name: "Holt",
//     avatar: "https://reqres.in/img/faces/4-image.jpg",
//   },
//   {
//     id: 5,
//     email: "charles.morris@reqres.in",
//     first_name: "Charles",
//     last_name: "Morris",
//     avatar: "https://reqres.in/img/faces/5-image.jpg",
//   },
//   {
//     id: 6,
//     email: "tracey.ramos@reqres.in",
//     first_name: "Tracey",
//     last_name: "Ramos",
//     avatar: "https://reqres.in/img/faces/6-image.jpg",
//   },
// ];
