const numbers = [1, 2, 3, 4, 5, 6, 7];
const maxNumber = numbers.reduce((max, current) => {
  if (current > max) return current;
  return max;
});
console.log(maxNumber);

const numbers1 = [1, 2, 3, 4, 5, 6, 7];
const sumEven = (arr) =>
  arr.filter((element) => !(element % 2)).reduce((a, b) => a + b);
console.log(sumEven(numbers1));

const numbers2 = [1, 2, 3, 4, 5, 6, 7];
function getAverage(arr) {
  const sum = numbers2.reduce((total, currentValue) => {
    return total + currentValue;
  });
  return sum / numbers.length - 1;
}

console.log(getAverage(numbers2));
