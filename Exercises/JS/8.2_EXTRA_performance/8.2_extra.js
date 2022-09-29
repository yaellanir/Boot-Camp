const emptyObject = {};
console.time("my timer");
for (let index = 0; index < 1000; index++) {
  emptyObject[index] = index;
}
console.timeEnd("my timer");
// console.log(emptyObject);

const emptyMap = new Map();
console.time("map timer");
for (let index = 0; index < 1000; index++) {
  emptyMap.set(index, index);
}
console.timeEnd("map timer");
// console.log(emptyMap);
//!  map setting is faster!!!

console.time("Object Lookup");
for (let index = 0; index < 1000; index++) {
  emptyObject[index];
}
console.timeEnd("Object Lookup");

console.time("Map Lookup");
for (let index = 0; index < 1000; index++) {
  emptyMap.get(index);
}
console.timeEnd("Map Lookup");
//!Object lookup is faster
