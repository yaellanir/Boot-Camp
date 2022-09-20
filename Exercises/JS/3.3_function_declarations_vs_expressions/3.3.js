// function percentageOfWorld1 (population){
//   let worldPop= 7900000000
//   return (population/worldPop)*100
// }
// console.log(1411000000);

let worldPop = 7900;
function get2() {
  return 2;
}
function percentageOfWorld1(population) {
  return (population / worldPop) * 100;
}

let israel = percentageOfWorld1(1654);
let england = percentageOfWorld1(3654);
let india = percentageOfWorld1(5654);

console.log(israel, england, india);

const percentageOfWorld2 = function (population) {
  return (population / worldPop) * 100;
};
let israel1 = percentageOfWorld2(1654);
let england1 = percentageOfWorld2(3654);
let india1 = percentageOfWorld2(5654);
console.log(israel1, england1, india1);
