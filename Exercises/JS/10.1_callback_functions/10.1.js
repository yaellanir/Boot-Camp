let printIsString = (str) => console.log(`${str} is a string`);

function isString(str, func) {
  if (typeof str === "string") {
    func(str);
  }
}
isString("hello", printIsString);
isString("hello", (str) => console.log(str));

function addDash(str) {
  console.log(str.split(" ").join("-"));
}
function firstWordUpperCase(str, func) {
  let upperCaseWord = str[0].toUpperCase() + str.substring(1);
  func(upperCaseWord);
}

firstWordUpperCase("hello my name is slim shady", addDash);
firstWordUpperCase("hello my name is slim shady", (str) =>
  console.log(str.split(" ").join("-"))
);
firstWordUpperCase("hello my name is slim shady", (str) =>
  console.log(str + " and this song sucks")
);

function printLength(element) {
  console.log(element.length);
}

function yitzsFunc(arr, func) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    func(element);
  }
}
yitzsFunc(["yitz", "is", "an", "awesome", "teacher"], printLength);
