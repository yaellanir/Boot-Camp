function calcCircleArea(radius) {
  let pi = 3.14;
  circleArea = pi * Math.pow(radius, 2);
  return circleArea;
}

console.log(calcCircleArea(27.46547));
console.log(calcCircleArea(27.46547).toFixed(2));
