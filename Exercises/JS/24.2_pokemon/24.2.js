function pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

pokemon.prototype.callPokemon = function () {
  console.log(`i choose you, ${this.name} `);
};
pokemon.prototype.attack = function (number) {
  console.log(`${this.name} used ${this.attackList[number - 1]}`);
};

const yaelomon = new pokemon("yaelomon", "fire", ["absorb", "acid", "magic"]);
const pikachu = new pokemon("pikachu", "lightning", ["shock", "strike"]);
const yitz = new pokemon("yitz", "farts", ["wind", "voice"]);

console.log((yaelomon.callPokemon(), yaelomon.attack(1)));
