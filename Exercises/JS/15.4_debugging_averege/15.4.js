function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
calcAverage([85, 90, 92]);
console.log(calcAverage([85, 90, 92]));

// sum was without a value - therefor it returned undefined.
// once we changed it to var = o the loop was able to calculate.
// also the function returned the value of sum and not the average as it was supposed to
// so we need to change return sum / arr.length aswell.
