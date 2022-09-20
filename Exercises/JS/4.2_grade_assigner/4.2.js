function numToLetter(numScore) {
  if (numScore > 90 && numScore < 100) {
    return "A";
  } else if (numScore >= 80 && numScore <= 89) {
    return "B";
  } else if (numScore >= 70 && numScore <= 79) {
    return "C";
  } else if (numScore >= 65 && numScore <= 69) {
    return "D";
  } else {
    return "F";
  }
}
console.log(numToLetter(56));
console.log(numToLetter(79));
console.log(numToLetter(99));
