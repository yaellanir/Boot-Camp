function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
findSmallest(52, 66, 2);
console.log(findSmallest(52, 66, 2));

// the function tryed to run an undefined function.
// the function is called findSmallst but we tried to run a
// function with a mistake in it. there was an "s" missing in the name.a
// i used chromedevtools
