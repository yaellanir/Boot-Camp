const yael = {
  age: 38,
  boyfriend: "yes",
  baby: "cute",
  city: "rishon lezion",
};

function swapKeysAndValues(obj) {
  const swappedObject = {};
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const val = values[index];
    swappedObject[val] = key;
  }
  return swappedObject;
}

console.log(swapKeysAndValues(yael));

// let array = [
//   ["key1", "val1"],
//   ["key2", "val2"],
//   ["key3", "val3"],
// ];

// let arrayCopy = array.map((element, index) => {
//   return [element[1], element[0]];
// });

// function manualMap(array, fn) {
//   const newArray = [];
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newArray.push(fn(element, index));
//   }
//   return newArray;
// }
// console.log(arrayCopy);

// let animals = ["dog", "cow", "cat"];
