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
  let filteredArr = arr.filter((e) => {
    let year = e.birthday.substr(-4);
    if (year < 1990) {
      return true;
    } else {
      return false;
    }
  });
  // let filteredShort = arr.filter((e)=> e.birthday.substr(-4) < 1990)
  let names = filteredArr.map((e) => e.name);
  return names;
}
console.log(bornBefore1990(data));

function newObjectFromFoodsWithCounts(arr) {
  const foodObj = {};
  arr.forEach((element) => {
    element.favoriteFoods.meats.forEach((eMeat) => {
      if (foodObj[eMeat]) {
        foodObj[eMeat]++;
      } else {
        foodObj[eMeat] = 1;
      }
    });
    element.favoriteFoods.fish.forEach((eFish) => {
      if (foodObj[eFish]) {
        foodObj[eFish]++;
      } else {
        foodObj[eFish] = 1;
      }
    });
  });
  return foodObj;
}

console.log(newObjectFromFoodsWithCounts(data));
