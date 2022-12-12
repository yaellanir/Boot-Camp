const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength.call() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}
whoIsStronger(hero.getStrength);

// we need to bind the function getStrength
//  that is a method of the object hero
// so that we can use it in WhoIsStronger
// ! console.log(whoIsStronger(hero.getStrength.bind(hero)));
