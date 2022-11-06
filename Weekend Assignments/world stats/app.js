
import { displayChart } from "./chart.js";
const continentsContainer = document.querySelector(".continents");
const countriesContainer = document.querySelector(".countries");
const spinnerContainer = document.querySelector(".spinnerContainer");
let region = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const state = {
  displayData: false,
  // currentContinent: "europe",
  currentContinentData: null,
  currentCountryData: null,
  // currentCityData: null,
};

function createButtons(array, type) {
  if (type == "countries") {
    countriesContainer.innerHTML = "";
  }
  array.forEach(function (element) {
    const btn = document.createElement("button");
    btn.textContent = element;
    btn.dataset.name = element.toLowerCase();
    btn.dataset.type = type;
    btn.classList.add('elements-btn')
    type === "countries"
      ? countriesContainer.append(btn)
      : continentsContainer.append(btn);
    btn.addEventListener("click", handleClick);
  });
}


async function fetchContinentApi(region) {
  const response = await fetch(`https://restcountries.com/v2/region/${region}`);
  const continentData = await response.json();
  console.log(continentData);
  state.currentContinentData = continentData.map((country) => ({
    name: country.name,
    population: country.population,
  }));
  // return continentData.map(country => ({name:country.name, population:country.population}))
  console.log("state continent data:", state.currentContinentData);
}

async function fetchCountryApi(country) {
  const requestConfig = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      limit: "50",
      order: "dsc",
      orderBy: "name",
      country: `${country}`,
    }),
  };
  // console.log(JSON.stringify(requestConfig));

  setSpinner(true);
  try {
    const response = await fetch(
      `https://countriesnow.space/api/v0.1/countries/population/cities/filter`,
      requestConfig
    );
    const countryData = await response.json();
    // console.log(countryData);
    const cities = countryData.data.map((city) => {
      return { name: city.city, population: city.populationCounts[0].value };

    });
    console.log("cities", cities);
    displayChart(cities);
    setSpinner(false);
    spinnerContainer.innerHTML = "";
    return cities;
  } catch (e) {
  }
}

function setSpinner(boolean) {
  if (boolean) {
    const spinner = document.createElement("h3");
    spinner.textContent = "Loading";
    spinnerContainer.append(spinner);
    spinner.classList.add("spinner")
  } else {
    const spinner = document.querySelector("h3");
    spinnerContainer.append(spinner);
  }
}

const handleClick = (e) => {
  const elementName = e.target.dataset.name;
  const elementType = e.target.dataset.type;
  state.displayData = !state.displayData;
  // bang operator changes to the opposite (toggle)
  if (elementType === "continents") {
    fetchAndDisplayContinents(elementName);
  } else {
    fetchCountryApi(elementName);
  }
};
const fetchAndDisplayContinents = async (continentName) => {
  if (state.displayData) {
    await fetchContinentApi(continentName);
    console.log(state.currentContinentData);
    // displayCountries(state.currentContinentData);
    displayChart(state.currentContinentData);
    createButtons(
      state.currentContinentData.map((continent) => continent.name),
      "countries"
    );
  } else {
    displayChart();
    countriesContainer.innerHTML = "";
  }
};
// callAndUseData()

// europeBtn.addEventListener("click", handleClick)

// function displayCountries(arrayOfCountries) {
//   const countryList = document.createElement("ul");
//   arrayOfCountries.forEach((country) => {
//     const countryListItem = document.createElement("li");
//     const countryName = document.createElement("p");
//     countryName.textContent = country.name;
//     countryListItem.append(countryName);
//     const countryPop = document.createElement("p");
//     countryPop.textContent = country.population;
//     countryListItem.append(countryPop);
//     countryList.append(countryListItem);
//   });
//   document.body.append(countryList);
// }
createButtons(region, "continents");
