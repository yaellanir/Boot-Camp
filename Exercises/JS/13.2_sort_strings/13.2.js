const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

foods.sort();
console.log(foods);

foods.sort().reverse();
console.log(foods);

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

foodsWithUpperCase.sort(function (a, b) {
  if (a.toLowerCase() < b.toLowerCase()) return -1;
  if (a.toLowerCase() > b.toLowerCase()) return 1;
  return 0;
});
console.log(foodsWithUpperCase);

foodsWithUpperCase.sort(function (a, b) {
  if (a.toLowerCase() > b.toLowerCase()) return -1;
  if (a.toLowerCase() < b.toLowerCase()) return 1;
  return 0;
});
console.log(foodsWithUpperCase);

foodsWithUpperCase.sort(function (a, b) {
  if (a.toLowerCase() > b.toLowerCase()) return -1;
  if (a.toLowerCase() < b.toLowerCase()) return 1;
  return 0;
});

const words = ["apple",
"supercalifragilisticexpialidocious",
"hi", "zoo"];

function sortByLength(words) {
  return words.sort((a, b) => b.length - a.length);
}
console.log(sortByLength(words));
