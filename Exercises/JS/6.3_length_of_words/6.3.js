function totalArrayLengths(arr) {
  let arrayLengths = [];
  for (let index = 0; index < arr.length; index++) {
    arrayLengths.push(arr[index].length);
  }
  return arrayLengths;
}
console.log(totalArrayLengths(["boo", "doooo", "hoo", "ro"]));
