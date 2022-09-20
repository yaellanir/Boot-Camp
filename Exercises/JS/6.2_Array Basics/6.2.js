const people = ["Greg", "Mary", "Devon", "James"];

for (index = 0; index < people.length; index++) {
  console.log(people[index]);
}

console.log(people.shift(), people);
console.log(people.pop(), people);
console.log(people.unshift("Matt"), people);
console.log(people.push("Yael"), people);

for (let index = 0; index < people.length; index++) {
  console.log(people[index]);
  if (people[index] === "Mary") {
    break;
  }
}

console.log(people.slice(2));
console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));

const people2 = ["Greg", "Mary", "Devon", "James"];
console.log(people2.splice(2, 1, "elizabeth", "artie"), people2);

let withBob = people.concat("bob");
console.log(withBob);
