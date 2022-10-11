// Ex1.1 - Yes or No
// Complete the method that takes a boolean value and
// return a "Yes" string for true, or a "No"
// string for false.

function yesNo(boolian) {
  if (boolian === true) {
    return "Yes";
  }
  return "No";
}
console.log(yesNo(true));

// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers
// given an array of minimum 4 positive integers.
// No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

const arr = [19, 5, 42, 2, 77, 120];
function sumOfLowNumbers(arr) {
  arr.sort((a, b) => a - b);
  let sum = arr[0] + arr[1];
  console.log(sum);
  return sum;
}

sumOfLowNumbers(arr);

// Ex2.2 - One and Zero - Binary
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

function binaryToInt(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    const number = arr[index];
    const power = arr.length - 1 - index;
    sum += number * 2 ** power;
  }

  return sum;
}
console.log("binary", binaryToInt([1, 0, 0, 1]));

// Ex2.3 - Find the Next Perfect Square
// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square
// after the one passed as a parameter.
// Recall that an integral perfect square is an integer n such that sqrt(n) is
// also an integer.
// If the parameter is itself not a perfect square then -1 should be returned.
// You may assume the parameter is positive.

// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

// 1. test if parameter is perfect square?
// 2. if is perfect square return next perfect square?
// 3. if not return -1.

function findNextSquare(n) {
  let nextSquare = (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1);
  if (Math.sqrt(n) % 1 === 0) {
    return nextSquare;
  } else {
    return -1;
  }
}
console.log(findNextSquare(114));

// Ex2.4 - Unique

// There is an array with some numbers. All numbers are equal except for one.
// Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

function findUnique(arr) {
  let uniqueElement;
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    let previousElement = i === 0 ? arr[arr.length - 1] : arr[i - 1];
    let nextElement = i === arr.length - 1 ? arr[0] : arr[i + 1];
    // console.log({i,previousElement, nextElement , currentElement});
    if (currentElement !== nextElement && currentElement !== previousElement) {
      uniqueElement = currentElement;
      break;
    }
  }
  return uniqueElement;
}
console.log("findddddddd ", findUnique([1, 1, 1, 1, 1, 5]));

// Ex2.5 - Summation

// Write a program that finds the summation of every number
//from 1 to num.
// The number will always be a positive integer greater than 0.

// For example:
// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

function sumNumbers(num) {
  let sum = 0;
  for (let index = 0; index <= num; index++) {
    sum = sum + index;
  }
  return sum;
}
console.log(sumNumbers(3));

// Ex2.6 - Years and Centuries

// The first century spans from the year 1 up to and including the year 100,
// The second - from the year 101 up to and including the year 200, etc.
// Task :
// Given a year, return the century it is in.
// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(  1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)

function whatCentury(year) {
  let century = (year - 1) / 100;
  let flooredCentury = Math.floor(century);
  return flooredCentury + 1;
}
console.log(whatCentury(1900));

// Ex2.7 - Basic Math

// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples
// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7

function basicMath(char, number1, number2) {
  // let math = `${number1} ${char} ${number2}`
  if (char === "+") {
    return number1 + number2;
  } else if (char === "-") {
    return number1 - number2;
  } else if (char === "*") {
    return number1 * number2;
  } else if (char === "/") {
    return number1 / number2;
  }
}

console.log(basicMath("+", 4, 7));
console.log(basicMath("-", 15, 18));
console.log(basicMath("*", 5, 5));
console.log(basicMath("/", 49, 7));

// Ex3.1 - Growth Of population

// In a small town the population is p0 = 1000 at the beginning of a year.
// The population regularly increases by 2 percent per year
// and moreover 50 new inhabitants per year come to live in the town.
// How many years does the town need to see its population
// greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants
// (number of inhabitants is an integer)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.

// More generally given parameters:
// - p0, percent, aug (inhabitants coming or leaving each year),
//  p (population to surpass)
// - the function nb_year should return n number of entire years needed to get
// a population greater or equal to p.
// - aug is an integer, percent a positive or null number,
// p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10

// Note: Don't forget to convert the percent parameter
// as a percentage in the body of your
// function: if the parameter percent is 2 you have to convert it to 0.02.

function growthOfPopulation(population, percentage, aug, target) {
  let numOfYears = 0;
  let currentPopulation = population;
  while (currentPopulation < target) {
    currentPopulation =
      currentPopulation + currentPopulation * (percentage / 100) + aug;
    numOfYears += 1;
  }
  return numOfYears;
}
console.log("growth", growthOfPopulation(1500000, 2.5, 10000, 2000000));

// Ex3.2 - People on the Bus

// Number of people in the bus
// There is a bus moving in the city,
// and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples).
// Each integer array has two items which represent number of people get into bus
// (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after
// the last array). Even though it is the last bus stop,
// the bus is not empty and some people are still in the bus,
// and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always
// >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

const busStops = [
  [2, 0],
  [5, 1],
  [0, 2],
];
function peopleOnBusLeft(array) {
  let peopleLeft = 0;
  for (let index = 0; index < array.length; index++) {
    const busStop = array[index];
    let peopleOn = busStop[0];
    let peopleOff = busStop[1];
    peopleLeft += peopleOn - peopleOff;
  }
  return peopleLeft;
}
console.log(peopleOnBusLeft(busStops));

// Advanced Math
// Ex4.1 - Fibonacci -
// “Write a function to return an n element in Fibonacci sequence” is one of the most common
// questions you can hear during the coding challenge interview part. In this blogpost I’m going to
// walk through the two of the most typical solutions for this problem and also cover a dreadful (for
// most of novice developers) topic of time complexity.
// So what is a Fibonacci sequence? According to ​Wikipedia​:
// “In mathematics, the Fibonacci numbers are the numbers in the following integer sequence,
// called the Fibonacci sequence, and characterized by the fact that every number after the first
// two is the sum of the two preceding ones.”
// Depending on the chosen starting point of the sequence (0 or 1) the sequence would look like
// this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

function fibonacci(n) {
  const FibonacciArr = [1, 1];
  for (let i = 2; i < n; i++) {
    let firstElement = FibonacciArr[i - 2];
    let secondElement = FibonacciArr[i - 1];
    let currentElement = firstElement + secondElement;
    FibonacciArr.push(currentElement);
  }
  console.log(FibonacciArr);
  return FibonacciArr[n - 1];
}
console.log("fibonacci", fibonacci(6));

// Ex4.2 - Tribonacci -

// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3
// (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I
// won't get to hear non-native Italian speakers trying to pronounce it :(
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature),
// we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1]
// basically shifts the common Fibonacci sequence by once place, you may be tempted to think
// that we would get the same sequence shifted by 2 places, but that is not the case and we would
// get:
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function
// that given a signature array/list, returns the first n elements - signature included of the so
// seeded sequence.
// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then
// return an empty array (except in C return NULL) and be ready for anything else which is not
// clearly specified ;)

function tribonacci(signature, n) {
  for (let i = 3; i < n; i++) {
    let firstElement = signature[i - 3];
    let secondElement = signature[i - 2];
    let thirdElement = signature[i - 1];
    let currentElement = firstElement + secondElement + thirdElement;
    signature.push(currentElement);
  }
  console.log(signature);
  return signature[n - 1];
}
console.log("tribonacci", tribonacci([0, 0, 1], 7));

// Basic Iteration Logic
// Ex5.1 - trimming string
// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry
// with strings with less than two characters.

function trimString(str) {
  let newStringArr = str.split("");
  console.log(newStringArr);
  newStringArr.shift();
  newStringArr.pop();
  return newStringArr.join("");
}

console.log(trimString("thisisbullshit"));

// Ex5.2 - String Repeat
// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeat_str(str, num) {
  let repeatedStr = str.repeat(num);
  return repeatedStr;
}
console.log(repeat_str("hello", 5));

// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
//
function toCamelCase(str) {
  let newString = str
    .replaceAll(/([_])/g, "-")
    .split("-")
    .map((e, i) => {
      if (i === 0) {
        return e;
      }
      let upperedWord = e[0].toUpperCase() + e.slice(1);
      return upperedWord;
    });
  return newString.join("");
}
console.log(toCamelCase("Welcome_to-the-jungle"));

// Ex5.4 - To Weird Case
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
// string with all even indexed characters in each word upper cased, and all odd indexed
// characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
// index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
// be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(str) {
  let newStringArr = str.split("").map((e, i) => {
    let upperCaseLetter = e[0].toUpperCase() + e.slice(1);
    let lowerCaseLetter = e[0].toLowerCase();
    +e.slice(1);
    if (i % 2 === 0) {
      return upperCaseLetter;
    } else return lowerCaseLetter;
  });
  return newStringArr.join("");
}
console.log(toWeirdCase("hello i suck at this"));

// Ex5.5 - Abbreviate two words
// Write a function to convert a name into initials.
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

function convertToInitials(word1, word2) {
  let firstLetterOfWord1 = word1.charAt(0).toUpperCase();
  let firstLetterOfWord2 = word2.charAt(0).toUpperCase();
  return firstLetterOfWord1 + "." + firstLetterOfWord2;
}
console.log(convertToInitials("hello", "Asshole"));

// Ex5.6 - Mask

// Usually when you buy something, you're asked whether your credit card number, phone number
// or answer to your most secret question is still correct. However, since someone could look over
// your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") ==
// "####################################man!"

function maskify(str) {
  if (str.length <= 4) {
    return str;
  }
  let strArray = str.split("");
  let maskedStr = strArray
    .map((element, index, arr) => {
      if (index >= arr.length - 4) {
        return "#";
      }      
      return element;
    })
    .join("");

  console.log(maskedStr);
}
maskify("sups");

// Ex5.7 - shortest words
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
const array = ["yael", "daniroja", "yitzhak"];
function findShortestWord(array) {
  array.sort((a, b) => {
    if (a.length > b.length) {
      return -1;
    }
    if (a.length < b.length) {
      return 1;
    } else return 0;
  });

  let shortestWord = array.pop();
  return shortestWord;
}

console.log(findShortestWord(array));
