function getSumOfEven(arr) {
  return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// in the scope area of the chrome devtools
// we can see the current function returns NaN. it return it because there is no
// arr[10]. the last item is arr[9].
// because it is trying to sum something that does not exist it return nan
// also - the function is trying to add even numbers , at the moment it is summing uneven numbers
// so we need to fix that aswell.

function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
