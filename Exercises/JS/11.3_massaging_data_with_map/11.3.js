const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

function namesFromArray(arr) {
  const newArray = arr.map((e, i) => ({ name: e.name }));
  return newArray;
}
console.log(namesFromArray(data));

function bornBefore1990(arr) {
  const newArray = arr.map((e, i) => {

  });
  return newArray;
    
}

function foods(arr) {
  const newArray = arr.map((e, i) => {
    console.log(e.fish);
    return { meats: e.favoriteFoods.meats, fish: e.favoriteFoods.fish}
  })
  return newArray;  
}
console.log(foods(data));