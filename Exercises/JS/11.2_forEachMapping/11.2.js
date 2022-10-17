const array = [1, 2, 3, 4, 5];

function doubleValues(arr) {
  return arr.map((element, i) => element * 2);
}
console.log(doubleValues(array));

function onlyEvenValues(arr) {
  const evenValues = [];
  arr.forEach((element, i) => {
    if (element % 2 === 0) {
      evenValues.push(element);
    }
  });
  return evenValues;
}

console.log(onlyEvenValues(array));

const arrWithStrings = ["string", 2, 3, 4, 5, "string"];

function showFirstAndLast(arr) {
  const firstAndLast = [];
  arr.forEach((e, i) => {
    if (
      (i === 0 && typeof e === "string") ||
      (i === arr.length - 1 && typeof e === "string")
    ) {
      firstAndLast.push(e);
    }
  });
  return firstAndLast;
}

console.log(showFirstAndLast(arrWithStrings));

const vowels = {
  a: "a",
  e: "e",
  i: "i",
  o: "o",
  u: "u",
};
function vowelCount(str) {
  const letters = str.split("");
  const count = {};
  letters.forEach((element, i) => {
    console.log(i, element, count);
    if (vowels[element]) {
      count[element] ? (count[element] += 1) : (count[element] = 1);
      // if (count[element]) {
      //   count[element] += 1;
      // } else {
      //   count[element] = 1;
      // }
    }
    console.log(i, element, count);
  });
  return count;
}

console.log(vowelCount("i love appleseeds thank you"));

function capitalize(str) {
  // const capitalizedString = str
  //   .split("")
  //   .map((element, i) => element.toUpperCase())
  //   .join("");
  return str.toUpperCase();
  // return capitalizedString;
}

console.log(capitalize("i love appleseeds thank you"));

function shiftLetters(str) {
  const letters = str.toLowerCase().split("");
  const encodedArray = letters.map((element, i) => {
    if (element.charCodeAt(0) === 65) {
      return "z";
    }
    return String.fromCharCode(element.charCodeAt(0) - 1);
  });
  console.log(encodedArray);
}

shiftLetters("abcdefg");

function swapCase(str) {
  const words = str.split(" ");
  const swapped = words.map((element, i) => {
    if (i % 2 === 1) {
      return capitalize(element);
    } else {
      return element;
    }
  });
  return swapped;
}

console.log(swapCase("wow look one is capitalized and the other is not"));
