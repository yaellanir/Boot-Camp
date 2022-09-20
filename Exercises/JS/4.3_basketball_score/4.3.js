let johnScore = [89, 120, 103];
let mikeScore = [116, 94, 123];

function calcAvg(avgScore) {
  return avgScore.reduce((a, b) => a + b) / avgScore.length;
}
console.log(calcAvg(johnScore));
let johnAvg = calcAvg(johnScore);

console.log(calcAvg(mikeScore));
let mikeAvg = calcAvg(mikeScore);

if (mikeAvg > johnAvg) {
  console.log(`Mike is the winner! with the score of ${mikeAvg}`);
} else if (mikeAvg < johnAvg) {
  console.log(`John is the winner! with the score of ${johnAvg}`);
} else {
  console.log(`It's a tie!`);
}

johnScore = [56, 123, 85];
mikeScore = [80, 50, 53];

console.log(calcAvg(johnScore));
johnAvg = calcAvg(johnScore);

console.log(calcAvg(mikeScore));
mikeAvg = calcAvg(mikeScore);

if (mikeAvg > johnAvg) {
  console.log(`Mike is the winner! with the score of ${mikeAvg}`);
} else if (mikeAvg < johnAvg) {
  console.log(`John is the winner! with the score of ${johnAvg}`);
} else {
  console.log(`It's a tie!`);
}
