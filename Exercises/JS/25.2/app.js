let person = {
  name: "yael",
  printName() {
    console.log(`${this.name}`);
  },
  printNameAfterSecond() {
    console.log(this.name);
    setTimeout(this.printName.bind(person), 1000);
  },
};

person.printName();
person.printNameAfterSecond();
