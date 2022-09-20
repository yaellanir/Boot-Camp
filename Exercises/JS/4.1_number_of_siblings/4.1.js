let numSiblings = prompt("How many siblings do you have?");
numSiblings = parseFloat(numSiblings);

if (numSiblings === 1) {
  console.log("1 sibling!");
} else if (numSiblings > 1) {
  console.log("More than one sibling!");
} else {
  console.log("no siblings!");
}

console.log(numSiblings(1));

// if we don't use the === operator then we could accept strings instead of numbers as answers
