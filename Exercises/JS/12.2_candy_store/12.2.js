const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id) {
  let newObj;
  candyStore.candies.forEach((element) => {
    if (id === element.id) {
      newObj = element;
    }
  });
  return newObj;
}
console.log(getCandy(candyStore, "as12f"));

function getPrice(candyStore, id) {
  let price = candyStore.candies.find((e) => e.id === id).price;
  return price;
}
console.log(getPrice(candyStore, "as12f"));

function addCandy(candyStore, id, name, price) {
  let newCandy = {
    id,
    name,
    price,
    amount: 1,
  };
  candyStore.candies.push(newCandy);
}

addCandy(candyStore, "1234fse", "the-candy", 5);

console.log(candyStore.candies);

// function buyCandy(candyStore, id) {
//   let price = candyStore.candies.find((e) => e.id === id).price;
//   array.forEach((element) => {
//     element.amount - 1;
//   });
//   let newRegister = cashRegister + price;
//   return newRegister;
// }

function buyCandy2(candyStore, id) {
  let candyIndex = candyStore.candies.findIndex((e) => e.id === id);
  let candy = candyStore.candies[candyIndex];
  candy.amount -= 1;
  candyStore.cashRegister += candy.price;
}
buyCandy2(candyStore, "1234fse");
console.log(candyStore);
