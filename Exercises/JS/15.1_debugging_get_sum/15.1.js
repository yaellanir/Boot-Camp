function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
console.log(getSum([1, 2, 3], [5, 66, 23]));

// the line that contains the problem is the the last one
// .the arrays are undefined. it comes up in the for loop
// because you cannot loop through an undefined length
// the arrays were undefined because it was missing a comma
//  where you run the code between the two arguments.
// i used - chrome devtools .
