const array = ["hello", "good day", "youre welcome", "hot dog", "hamburgers"];

function countArray(array) {
  const stringFromArray = array.toString(array).toLowerCase();
  // console.log(letterString);
  const letterCounts = {};
  for (let index = 0; index < stringFromArray.length; index++) {
    const currentLetter = stringFromArray[index];
    console.log(letterCounts[currentLetter]);
    if (currentLetter === " " || currentLetter === ",") {
      continue;
    }
    if (!letterCounts[currentLetter]) {
      letterCounts[currentLetter] = 1;
    } else {
      letterCounts[currentLetter] += 1;
    }
  }
  console.log(letterCounts);
}

countArray(array);
