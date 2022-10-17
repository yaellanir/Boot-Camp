function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  }
  return counter;
}
// countOccurrences ( "ini mini miny moe" , "n" );
console.log(countOccurrences("ini mini miny moe", "n"));

// the problem was that the function was returning the counter
// but the counter was set on 0 and did not change after each loop iterated
// it was counter + 1, but needed to change to counter +=1.
// once we added the "=" sign it was able to assign the new value to the counter variable
// after each iteration of the loop.
