const array = ["apple", "orange", "kiwi"];

function filter(array, callback) {
  const filteredArr = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (callback(element, i, array)) {
      filteredArr.push(element);
    }
  }
  return filteredArr;
}

filter(array, (e, i, arr) => {
  console.log(e, i, arr);
});



Array.prototype.filter = function (callback) {
  const filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (callback(element, i, this)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};
console.log(array.filter((e) => e.length > 4));

Array.prototype.map = function (callbackFunc) {
  const mappedArray = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    mappedArray.push(callbackFunc(element, i, this));
  }
  return mappedArray;
};

console.log(array.map(() => ""));
// console.log([1, 2, 3, 4, 5, 6].filter(is_odd));

