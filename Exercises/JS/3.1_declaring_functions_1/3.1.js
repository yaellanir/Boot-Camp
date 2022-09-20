/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
declarations to function expression.
* Please reformat the following function
expressions to function declarations.
Submit the file to Hive
*/
// From function declarations to function expressions

function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}

const welcome1 = function () {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
};

function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}

const power1 = function (a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};

function add(a, b = 5) {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
}

const add1 = function (a, b = 5) {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
};

// From function expressions to function declarations
const hello = () => "Hello!";
function hello1() {
  return "Hello!";
}

const squareRoot = (a) => Math.sqrt(a);
console.log("square arrow", squareRoot(2));
function squareRoot1(a) {
  return Math.sqrt(a);
}
console.log("square yael", squareRoot1(2));

const randomNumbers = (a, b) => Math.random() * (a - b) + b;
console.log("random arrow", randomNumbers(5, 10));
function randomNumbers1(a, b) {
  return Math.random() * (a - b) + b;
}
console.log("random yael", randomNumbers1(5, 10));
