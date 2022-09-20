function countryToLiveIn(language, isIsland, population, country) {
  if (language === "english" && population < 50000000 && !isIsland) {
    console.log(`You should live in ${country}`);
  } else {
    console.log(`${country} does not meet your criteria`);
  }
}

countryToLiveIn("english", false, 34000000, "spain");
