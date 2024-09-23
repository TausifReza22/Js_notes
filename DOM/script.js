//DOM => Document Object Model, programming interface for web documents

//D => Document, TOP level object in DOM  ENTIRE HTML DOCUMENT.

//O =< Object, everything in JS is an object.

//M => Model, structured representation of a document.

//Selectors => Used to select HTML elements
//class selectors
//id selectors
//tag selectors
//query selectors
//query selectorAll

// ID SELECTORS

// const heading1 = document.getElementById('heading-h1');

// console.log(heading1);

// CLASS SELECTORS

// let heading2 = document.getElementsByClassName('heading-h2')[0];
// console.log(heading2);

// // TAG SELECTORS

// let hTags = document.getElementsByTagName('button');

// console.log(hTags);

// QUERY SELECTORS  => returns the first element that matches a specified CSS selector in the document.
//for id = '#heading-h1'
//for class = '.heading-h2'
//for tag = 'button'

// let querySelector = document.querySelector('.heading-h2');

// console.log(querySelector);

// QUERY SELECTOR ALL = > returns all elements that matches a specified CSS selector in the document.

// let querySelectorAll = document.querySelectorAll('.heading-h2');

// console.log(querySelectorAll);

// Events => Actions that occur in the system you are programming, which the system tells you about so you can respond to them in some way if desired.

// let button = document.querySelector("button");

// function add() {
//   return 12387123 + 12312;
// }

//let callbackFn = () => {
//   // console.log('Button Clicked');
//   document.body.style.background = "red";
//   button.style.background = "green";
//     button.style.color = "white";
//   console.log(add());

// }
// button.addEventListener("click",callbackFn());

//DEFER KEYWORD => defer attribute in HTML is used to prevent the script from running until the HTML is fully loaded.

// let h1 = document.querySelector('h1');
// console.log(h1);

// h1.addEventListener('click', () => {
// console.log('H1 Clicked');

// })

//inner text => returns the text content of an element.

// console.log(document.images)
// console.log(document.links)
// console.log(document.all)

// let linkText = document.querySelectorAll('a')[2].innerText;

// console.log(linkText)

//InnnerHTML

// let div = document.querySelector('div');
// div.addEventListener("click",()=>{
//     console.log('Div Clicked');
// })
// console.log(div);

//DOM MANIPULATION

// let heading = document.querySelector("#heading");

// let button = document.querySelector("#changeBtn");

// //click

// button.addEventListener("click", () => {

// console.log(heading.innerText);

// //heading.innerText = "Hello this is heading 1";

// heading.innerText = "Shivansh"

// });

// console.log(document.lastElementChild.lastElementChild.lastElementChild);

//METHODS = > getAttribute, setAttribute, removeAttribute

//getAttribute => returns the value of the attribute with the specified name, of an element.

// setAttribute => sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

//removeAttribute => removes the specified attribute from an element.

//getAttribute => returns the value of the attribute with the specified name, of an element.

// let btnAttribute = document.querySelector("button");
// let heading =    document.querySelector("h1");
// let removeBtn = document.querySelector("#remove");

// removeBtn.addEventListener("click",()=>{
//     heading.setAttribute("class","display")
// })

// btnAttribute.addEventListener("click",()=>{
// heading.setAttribute("class","red")
// })

// let greenBtn = document.body.getElementsByTagName("button")[1]

// greenBtn.addEventListener("click",()=>{
//     heading.setAttribute("class","null")
// });

// console.log(greenBtn)
// console.log(btnAttribute.getAttribute("type"));

//setAttribute => sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

// btnAttribute.setAttribute("class","no--attribute");

//removeAttribute => removes the specified attribute from an element.

// btnAttribute.removeAttribute("class");

// console.log(btnAttribute)

// let h = document.querySelector("h1");

// let btn = document.querySelector("button");

// let img = document.querySelector("img");

// btn.addEventListener("click",(event)=>{

//     console.log(event)

// });

//Event Propagation : Event propagation is a mechanism that defines the order in which event handlers are called when one element is nested inside a second element, and both elements have registered a handle for the same event.

//Event Bubbling : Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element.

// let outerChild = document.getElementsByTagName("div")[0];
// let innerChild = document.getElementsByTagName("div")[1];
// let btn = document.getElementsByClassName("btn")[0];

// outerChild.addEventListener("click",()=>{
// console.log("Outer Child Clicked");
// })

// innerChild.addEventListener("click",()=>{
//     console.log("Inner Child Clicked");
// })

// btn.addEventListener("click",()=>{
//     console.log("Button Clicked");
// })

//Event Capturing : Event capturing is the event starts from the top of the DOM tree and goes down to the target element. It is also known as trickling.

// let outerChild = document.getElementsByTagName("div")[0];
// let innerChild = document.getElementsByTagName("div")[1];
// let btn = document.getElementsByClassName("btn")[0];

// outerChild.addEventListener("click",()=>{
// console.log("Outer Child Clicked");
// },true)

// innerChild.addEventListener("click",()=>{
//     console.log("Inner Child Clicked");
// },true)

// btn.addEventListener("click",()=>{
//     console.log("Button Clicked");
// },true)

//Stop propagation => stops the bubbling or capturing of an event.

// let outerChild = document.getElementsByTagName("div")[0];
// let innerChild = document.getElementsByTagName("div")[1];
// let btn = document.getElementsByClassName("btn")[0];

// outerChild.addEventListener("click",()=>{
// console.log("Outer Child Clicked");
// })

// innerChild.addEventListener("click",()=>{
//     console.log("Inner Child Clicked");
// })

// btn.addEventListener("click",(event)=>{
//     console.log("Button Clicked");
//     event.stopPropagation();

// })

//Event Delegation => Event delegation allows you to avoid adding event listeners to specific nodes; instead, the event listener is added to one parent. That event listener analyzes bubbled events to find a match on child elements.

// let ul = document.querySelector("ul");

// ul.addEventListener("click",(event)=>{
// if(event.target.tagName=="LI"){
//     console.log(event.target.innerText);
// }

// })

// function add(a,b){
// console.log(a+b);
// }

// function substract(a,b){
//     console.log(a-b);

// }
// function product(a,b){
//     console.log(a*b);

// }

// let a = 20
// let b = 30

// let parentDiv = document.querySelector(".parent");

// parentDiv.addEventListener("click",(event)=>{

//     // console.log(event.target.getAttribute("class"));

//     if(event.target.getAttribute("class")=="child1"){
//         add(a,b)
//     }
//    else if(event.target.getAttribute("class")=="child2"){
//         substract(a,b)
//     }
//    else if(event.target.getAttribute("class")=="child3"){
//         product(a,b)
//     }
// });

//Classlist methods => add, remove, toggle, contains

//add = to add a class with a whitespace in between

//remove =  to remove a class if present

//toggle  = Remove if present, add if not present

//contains = checks if a class is present or not.

// let h1 = document.querySelector("h1");

// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   h1.classList.add("red");
// });

// document.getElementsByTagName("button")[1].addEventListener("click", () => {
//   h1.classList.remove("red");
// });

// document.getElementsByTagName("button")[2].addEventListener("click", () => {
//   h1.classList.toggle("red");
// });

// document.getElementsByTagName("button")[3].addEventListener("click", () => {

//     console.log(h1.classList.contains("red"));
// });

//Create Element => creates an HTML element with the specified tag name.

//  let div =  document.createElement("span");
//  div.classList.add("newDiv");
//  div.innerText = "Hello this is a new div";
//div.innerHTML = "<div>Hello this is a new div</div>"

//AppendChild => appends a node as the last child of a Parent Node.It is a method that is attached to a node that is serving as a parent node and inside the params it takes the child node that you want to append to the parent

// document.body.appendChild(div);

// document.querySelector("button").addEventListener("click",()=>{
//    let parentDiv = document.querySelector(".parent");
//    parentDiv.appendChild(div);

// })

