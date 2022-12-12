// Answer the following questions:
// Question 1:
// In your own words what will this point to and why?
// (Note this is the global scope)
// console.log(this);

// ! this will refer to the window because
// ! the current execution scope is the global scope

// Question 2:
// a. In your own words what will this point to and why?
// b. How can you fix this code?

// const myObj = {
// name: "Timmy",
// greet: () => {
// console.log(`Hello ${this.name}`);
// },
// };
// myObj.greet();

// ! a--- in this example the word this is after an arrow function
// !arrow functions do not get their own this.
// ! b--- ou can fix this by doing this:

//! const myObj = {
//!  name: "Timmy",
//!   greet: function() {
//!  console.log(`Hello ${this.name}`);
//!   },
//!   };
//!   myObj.greet();

// Question 3:
// In your own words what will this point to and why?
// const myFuncDec = function () {
// console.log(this);
// };
//!this is a method on the window -
//!this inside of a regular function refers to a window

// Question 4:
// In your own words what will this point to and why?
// const myFuncArrow = () => {
// console.log(this);
// };
//!this will point to the window global scope

// myFuncArrow();
// Question 5:
// a. In your own words, what will this point to and why?
// b. How can you fix this code?
// document.querySelector(".element").addEventListener(() => {
// console.log(this);
// });
//! this has an error function so it wont point to the element ,
//! instead it will point to the window
// !in this case it doesn't have the word click so it will show an error
