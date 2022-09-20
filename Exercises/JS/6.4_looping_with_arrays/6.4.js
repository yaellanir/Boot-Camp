let worldPop = 7900;
function percentageOfWorld1(population) {
  return (population / worldPop) * 100;
}

let populations = [5000, 20000, 3000, 1500];
function populationPercentages(populations) {
  let percentages = [];

  for (let index = 0; index < populations.length; index++) {
    percentages.push(percentageOfWorld1(populations[index]));
  }
  return percentages;
}
console.log(populationPercentages(populations));
