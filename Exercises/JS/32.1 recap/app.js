/** 1)
  Create an input field and a button when the button is clicked
  call  function that receives 'number' as a parameter (from input field)
  and returns a new promise after 2 sec
  If the number is above 17 display on the screen 'You can drive'
  and if it's smaller throw error and display on the screen 'You're too young to drive'
 */
//! Check yourself once with .then .catch and once with async await
//! DRY
//! Small functions

const textInput = document.querySelector("#textInput");
const btn = document.querySelector("#btn");
const displayText = document.querySelector("#displayText");
const BASE_URL = "https://capsules7.herokuapp.com/api/carMarket/";
btn.addEventListener("click", () => {
  // ------------------------------------
  // ----- UNCOMMENT TO USE PROMISE -----
  //   createPromise(Number(textInput.value))
  //     .then((resolve) => {
  //       console.log(resolve);
  //     }).catch((reject) => console.log(reject));
  // ------------------------------------
  // --- UNCOMMENT TO USE ASYNC/AWAIT ---
  createPromiseAsync(Number(textInput.value));
});
// ------------------------------------
// ----- UNCOMMENT TO USE PROMISE -----
// function createPromise(num) {
//   return newPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num >= 17) {
//         resolve(displayText.innerHTML = "You can drive")
//       } else {
//         reject(displayText.innerHTML = "You're too young to drive")
//       }
//     }, 2000)
//   })
// }
// ------------------------------------
// --- UNCOMMENT TO USE ASYNC/AWAIT ---
async function createPromiseAsync(num) {
  try {
    setTimeout(() => {
      if (num >= 17) {
        displayText.innerHTML = "You can drive";
      } else {
        displayText.innerHTML = "You're too young to drive";
      }
    }, 2000);
  } catch (error) {
    console.log(error);
  }
}
// -----------------------------------
// ----------- Car Market ------------
/** 2)
   create a car Market Object
   fetch all data from the API and assign it to the carMarketObj
   add spinner to see that everything works
   and show message when done
   */
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/agencies
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/agencies/:id
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/customers
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/customers/:id:
//? Do i need? https://capsules7.herokuapp.com/api/carMarket/tax

// const fetchData = async (url) => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const extractAgencyByID = async (arr) => {
//   let res = [];
//   for (let agency of arr) {
//     let userURL = `https://capsules7.herokuapp.com/api/carMarket/agencies/${agency.agencyId}`;
//     const f = fetchData(userURL);
//     res.push(f);
//   }
//   let fRes = await Promise.all(res);
//   return fRes;
// };

// const extractCustomerByID = async (arr) => {
//   let res = [];
//   for (let customer of arr) {
//     let userURL = `https://capsules7.herokuapp.com/api/carMarket/customers/${customer.id}`;
//     const f = fetchData(userURL);
//     res.push(f);
//   }
//   let fRes = await Promise.all(res);
//   return fRes;
// };

// const getData = async () => {
//   const sellers = await fetchData("https://capsules7.herokuapp.com/api/carMarket/agencies")
//   const customersList = await fetchData("https://capsules7.herokuapp.com/api/carMarket/customers")
//   const taxesAuthority = await fetchData("https://capsules7.herokuapp.com/api/carMarket/tax")
//   const agencies = await extractAgencyByID(sellers)
//   const customers = await extractCustomerByID(customersList)
//   Object.assign(sellers, agencies)
//   Object.assign(customers, customers)
//   const carMarket = {}
//   Object.assign(carMarket, { sellers }, { customers }, { taxesAuthority })
//   // console.log("carMarket", carMarket);
//   return carMarket;
// }
// getData()

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const extractByID = async (str, arr) => {
  let res = [];
  for (let item of arr) {
    let url;
    if (str === "sell") {
      url = `https://capsules7.herokuapp.com/api/carMarket/agencies/${item.agencyId}`;
    } else {
      url = `https://capsules7.herokuapp.com/api/carMarket/customers/${item.id}`;
    }
    const f = fetchData(url);
    res.push(f);
  }
  let fRes = await Promise.all(res);
  return fRes;
};

const getData = async () => {
  const sellers = await fetchData(
    "https://capsules7.herokuapp.com/api/carMarket/agencies"
  );
  const customersList = await fetchData(
    "https://capsules7.herokuapp.com/api/carMarket/customers"
  );
  const taxesAuthority = await fetchData(
    "https://capsules7.herokuapp.com/api/carMarket/tax"
  );
  const agencies = await extractByID("sell", sellers);
  const customers = await extractByID("buy", customersList);
  Object.assign(sellers, agencies);
  Object.assign(customers, customers);
  const carMarket = {};
  Object.assign(carMarket, { sellers }, { customers }, { taxesAuthority });
  console.log("carMarket", carMarket);
  return carMarket;
};
getData();
// ----------------------------------------------------------------------

//? 3)
//? Create two button on the screen "Customers" "Agencies"
//? When the user clicks the button display a list of Customers / Agencies names
//? Only one list can be presented at a time
const customersBtn = document.querySelector("#customersBtn");
const agenciesBtn = document.querySelector("#agenciesBtn");
const listContainer = document.querySelector("#listContainer");

customersBtn.addEventListener("click", async () => {
  listContainer.innerHTML = "";
  setSpinner(true);
  const carMarketObj = await getData();
  const ol = document.createElement("ol");
  ol.innerHTML = "Customers List:";
  ol.dataset.type = "customers";
  listContainer.appendChild(ol);
  carMarketObj.customers.forEach((customer) => {
    let { name, id } = customer;
    const li = document.createElement("li");
    li.innerHTML = name;
    li.dataset.id = id;
    ol.appendChild(li);
  });
  setSpinner(false);
});
// -----------------------------------------------------
agenciesBtn.addEventListener("click", async () => {
  listContainer.innerHTML = "";
  setSpinner(true);
  const carMarketObj = await getData();
  console.log(carMarketObj);
  const ol = document.createElement("ol");
  ol.innerHTML = "Agencies List:";
  ol.dataset.type = "agencies";
  listContainer.appendChild(ol);
  listContainer.dataset.type = "agencies";
  carMarketObj.sellers.forEach((seller) => {
    let { agencyName, agencyId } = seller;
    const li = document.createElement("li");
    li.innerHTML = agencyName;
    li.dataset.id = agencyId;
    ol.appendChild(li);
  });
  setSpinner(false);
});
// -----------------------------------------------------
const setSpinner = (bool) => {
  if (bool) {
    const spinner = document.createElement("h3");
    spinner.textContent = "Loading";
    listContainer.appendChild(spinner);
  } else {
    const spinner = document.querySelector("h3");
    listContainer.removeChild(spinner);
  }
};

// ----------------------------------------------------------------------
//? 4)
//? When the user clicks on single name of a Customer / Agency
//? Show over the screen a card with all the data of that particular
// Customer / Agency
//! Questions we should ask ourselves:
//! Where functions can be combined into one function?
//! Am I holding unnecessary information in the client's browser?
//! Why did I choose to call the API the way I did?
//* You can divide the work inside the capsule and share the responsibility
//* Separate the functions of logic and The functions related to HTML

listContainer.addEventListener("click", async (e) => {
  if (e.target.tagName !== "OL") {
    const type = e.target.parentElement.dataset.type;
    const id = e.target.dataset.id;
    const url = `${BASE_URL}${type}/${id}`;
    const data = await fetchData(url);
    console.log(data);
    printInfo(data, type);
    // printCar()
  }

});
const fetchById = async (url, id) => {};

const printInfo = async (obj, type) => {
  const card = document.querySelector(".popup");
  const content = document.querySelector(".content");
  content.textContent = "";
  //Todo: Create a function that returns an array of car names
  for (const key in obj) {
    const value = obj[key];
    console.log(key, value);
    const p = document.createElement("p");
    if (key == "cars") {
      p.innerText = `${key}: `;
      if (type == "agencies") {
        for (const key in value) {
          p.innerText += `${key}, `;
        }
      } else if (type == "customers") {
        value.forEach((car) => {
          p.innerText += `${car.name}, `;
        });
      }
    } else {
      p.innerText = `${key}: ${value}`;
    }
    content.appendChild(p);
  }
  card.style.display = "block";
};


// function printCar() {
//   if (key == "cars") {
//     p.innerText = `${key}: `;
//     if (type == "agencies") {
//       for (const key in value) {
//         p.innerText += `${key}, `;
//       }
//     } else if (type == "customers") {
//       value.forEach((car) => {
//         p.innerText += `${car.name}, `;
//       });
//     }
//   } else {
//     p.innerText = `${key}: ${value}`;
//   }
  
// }

// function printCarForAgency(arr) {
// cars.forEach(car => {
// let {name, carNumber} = car;
// const p = document.createElement("p");
// p.innerHTML = name;
// p.dataset.id = carNumber
    
//   });
  

  // carMarketObj.sellers.forEach((seller) => {
  //   let { agencyName, agencyId } = seller;
  //   const li = document.createElement("li");
  //   li.innerHTML = agencyName;
  //   li.dataset.id = agencyId;

// }



document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});


//? 5)
//? When the user clicks on get image of the car fetch the car image and display another card with the image.
//! but what if i did no get the image ?????

//? ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// https://capsules7.herokuapp.com/api/carMarket/img/:brand/:model

//! Questions we should ask ourselves:
//! Where functions can be combined into one function?
//! Am I holding unnecessary information in the client's browser?
//! Why did I choose to call the API the way I did?

//* You can divide the work inside the capsule and share the responsibility
//* Separate the functions of logic and The functions related to HTML
//* Don't mess with the design (CSS)



const getData1 = async () => {
  const sellers = await fetchData(
    "https://capsules7.herokuapp.com/api/carMarket/img/:brand/:model"
  )}