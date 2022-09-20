let sameObjectArray = [];
sameObjectArray.length = 100;
sameObjectArray.fill("yael", 0, 100);
console.log(sameObjectArray);

let oneToOneHundredArray = Array.from(sameObjectArray, (element, i) => i + 1);
console.log(oneToOneHundredArray);

const person = {
  firstName: "Yitz",
  lastName: "Halfari",
  age: `33`,
};
console.log(Object.values(person));
console.log(Object.assign({}, sameObjectArray));
console.log(typeof sameObjectArray);
console.log(Array.isArray(sameObjectArray));
console.log((oneToOneHundredArrayCopy = oneToOneHundredArray.map((x) => x)));

double = (x) => x * 2;
console.log(oneToOneHundredArray.map(double));
