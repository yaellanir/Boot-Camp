function countryInfo(country, population, capital) {
  return ` ${country} + has ${population} people and it's capital is ${capital}`;
}
let israelInfo = countryInfo("israel", 9000000, "jerusalem");
console.log(israelInfo);

let englandInfo = countryInfo("england", 9000000, "london");
console.log(englandInfo);

let irelandInfo = countryInfo("ireland", 9000000, "dublin");
console.log(irelandInfo);
