const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const compareTwoArrays = (arr1, arr2) => {
  let sharedElement = [];
  for (let index = 0; index < arr1.length; index++) {
    if (arr2.includes(arr1[index])) {
      sharedElement.push(arr1[index]);
    }
  }
  return sharedElement.length > 0 ? sharedElement : false;
};

console.log(compareTwoArrays(food, food1));
