const mycountry = {
  country: "israel",
  capital: "jerusalem",
  language: "hebrew",
  population: "9 million",
  neighbors: ["jordan", "egypt", "syria", "lebanon"],
  description() {
    return `${this.country} has ${this.population} people, their mother tongue is ${this.language},
        they have ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`;
  },
  checkIsland(isIsland) {
    return this.neighbors.length <= 1 ? "Is island" : "not an Island";
  },
};
console.log(mycountry.description());
console.log(mycountry.checkIsland());

console.log(mycountry);
