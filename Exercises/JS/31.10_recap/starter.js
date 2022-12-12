//! ↓↓↓↓↓↓↓ Our car market object to start with ↓↓↓↓↓↓↓↓
const ourCarMarket = {
  sellers: [
    {
      agencyName: 'CarMax',
      cash: 968541,
      credit: 500000,
      agencyId: '26_IPfHU1',
      cars: {
        Bmw: [
          {
            name: 'X5',
            year: 2015,
            price: 218000,
            carNumber: '4Ixb0',
            ownerId: '26_IPfHU1',
          },
          {
            name: 'X6',
            year: 2014,
            price: 97100,
            carNumber: 'kAnv-',
            ownerId: '26_IPfHU1',
          },
          {
            name: 'Z4',
            year: 2019,
            price: 296900,
            carNumber: 'ISMdU',
            ownerId: '26_IPfHU1',
          },
          {
            name: '3',
            year: 2010,
            price: 75100,
            carNumber: '9DJPw',
            ownerId: '26_IPfHU1',
          },
        ],
        Toyota: [
          {
            name: 'Land Cruiser',
            year: 2005,
            price: 80540,
            carNumber: 'Kt-pW',
            ownerId: '26_IPfHU1',
          },
          {
            name: 'Corolla',
            year: 2019,
            price: 109100,
            carNumber: 'YiYdI',
            ownerId: '26_IPfHU1',
          },
          {
            name: 'Hilux',
            year: 2019,
            price: 204000,
            carNumber: 'DRmNw',
            ownerId: '26_IPfHU1',
          },
        ],
        Ford: [
          {
            name: 'F250',
            year: 2020,
            price: 198500,
            carNumber: 'g4Wfp',
            ownerId: '26_IPfHU1',
          },
          {
            name: 'Explorer',
            year: 2020,
            price: 265200,
            carNumber: 'iNT8Q',
            ownerId: '26_IPfHU1',
          },
        ],
        Alpha_Romeo: [
          {
            name: 'Spider',
            year: 2011,
            price: 75405,
            carNumber: '6t7QU',
            ownerId: '26_IPfHU1',
          },
          {
            name: '166',
            year: 2002,
            price: 12400,
            carNumber: 'XMqpn',
            ownerId: '26_IPfHU1',
          },
        ],
        Chevrolet: [
          {
            name: 'Impala',
            year: 2016,
            price: 65042,
            carNumber: 'vbeAo',
            ownerId: '26_IPfHU1',
          },
          {
            name: 'Savannah',
            year: 2016,
            price: 76505,
            carNumber: 'WelWa',
            ownerId: '26_IPfHU1',
          },
        ],
      },
    },
    {
      agencyName: 'The Auto World',
      cash: 687450,
      credit: 200000,
      agencyId: 'gNHjNFL12',
      cars: {
        Bmw: [
          {
            name: 'X6',
            year: 2018,
            price: 548100,
            carNumber: 'EMW_7',
            ownerId: 'gNHjNFL12',
          },
          {
            name: '3',
            year: 2017,
            price: 178000,
            carNumber: 'XlnB4',
            ownerId: 'gNHjNFL12',
          },
        ],
        Toyota: [
          {
            name: 'Prius',
            year: 2017,
            price: 101542,
            carNumber: '-RQgN',
            ownerId: 'gNHjNFL12',
          },
          {
            name: 'Highlander',
            year: 2017,
            price: 202540,
            carNumber: 'AZJZ4',
            ownerId: 'gNHjNFL12',
          },
          {
            name: 'Corolla',
            year: 1996,
            price: 5420,
            carNumber: 'kHE8f',
            ownerId: 'gNHjNFL12',
          },
          {
            name: 'Corolla',
            year: 2012,
            price: 40570,
            carNumber: 'p2qEi',
            ownerId: 'gNHjNFL12',
          },
        ],
        Ford: [
          {
            name: 'Explorer',
            year: 2014,
            price: 127502,
            carNumber: 'Ty1zN',
            ownerId: 'gNHjNFL12',
          },
          {
            name: 'F350',
            year: 2012,
            price: 54250,
            carNumber: 'z03H2',
            ownerId: 'gNHjNFL12',
          },
        ],
        Chevrolet: [
          {
            name: 'Savannah',
            year: 2010,
            price: 36504,
            carNumber: 'RXFZe',
            ownerId: 'gNHjNFL12',
          },
          {
            name: 'Malibu',
            year: 2009,
            price: 19585,
            carNumber: 'K5IsM',
            ownerId: 'gNHjNFL12',
          },
        ],
        Alpha_Romeo: [],
      },
    },
    {
      agencyName: 'Best Deal',
      cash: 1245000,
      credit: 200000,
      agencyId: 'Plyq5M5AZ',
      cars: {
        Bmw: [
          {
            name: '3',
            year: 2015,
            price: 137000,
            carNumber: 'AZJZ4',
            ownerId: 'Plyq5M5AZ',
          },
          {
            name: 'X6',
            year: 2020,
            price: 966500,
            carNumber: 'S6DL1',
            ownerId: 'Plyq5M5AZ',
          },
        ],
        Toyota: [
          {
            name: 'Land Cruiser',
            year: 2020,
            price: 336300,
            carNumber: '6rvXw',
            ownerId: 'Plyq5M5AZ',
          },
          {
            name: 'Hilux',
            year: 2005,
            price: 35005,
            carNumber: 'MWXBG',
            ownerId: 'Plyq5M5AZ',
          },
          {
            name: 'Corolla',
            year: 2020,
            price: 111900,
            carNumber: 'hCzl-',
            ownerId: 'Plyq5M5AZ',
          },
        ],
        Ford: [
          {
            name: 'Focus',
            year: 2020,
            price: 98200,
            carNumber: 'kN3HP',
            ownerId: 'Plyq5M5AZ',
          },
          {
            name: 'Focus',
            year: 2005,
            price: 6502,
            carNumber: 'LJTCs',
            ownerId: 'Plyq5M5AZ',
          },
        ],
        Alpha_Romeo: [
          {
            name: 'Romeo Julia',
            year: 2020,
            price: 275406,
            carNumber: '2kjy7',
            ownerId: 'Plyq5M5AZ',
          },
          {
            name: 'Romeo Stelvio',
            year: 2019,
            price: 215403,
            carNumber: '7A5b-',
            ownerId: 'Plyq5M5AZ',
          },
        ],
        Chevrolet: [
          {
            name: 'Traverse',
            year: 2020,
            price: 201102,
            carNumber: 'QwBOT',
            ownerId: 'Plyq5M5AZ',
          },
          {
            name: 'Impala',
            year: 2019,
            price: 165041,
            carNumber: '2v4jt',
            ownerId: 'Plyq5M5AZ',
          },
          {
            name: 'Malibu',
            year: 2017,
            price: 75405,
            carNumber: 'O4_Jv',
            ownerId: 'Plyq5M5AZ',
          },
        ],
      },
    },
    {
      agencyName: 'Car Werks',
      cash: 302502,
      credit: 150000,
      agencyId: '9KeaYbRLP',
      cars: {
        Bmw: [
          {
            name: '8',
            year: 2020,
            price: 942500,
            carNumber: '4IUMz',
            ownerId: '9KeaYbRLP',
          },
          {
            name: 'X6',
            year: 2010,
            price: 129000,
            carNumber: 'Vw0fV',
            ownerId: '9KeaYbRLP',
          },
          {
            name: 'X3',
            year: 2019,
            price: 358100,
            carNumber: 'ufN54',
            ownerId: '9KeaYbRLP',
          },
          {
            name: '3',
            year: 2020,
            price: 389100,
            carNumber: 'F127X',
            ownerId: '9KeaYbRLP',
          },
          {
            name: '3',
            year: 2002,
            price: 18400,
            carNumber: 'ueZUp',
            ownerId: '9KeaYbRLP',
          },
        ],
        Toyota: [
          {
            name: 'Prius',
            year: 2011,
            price: 38520,
            carNumber: 'AZJZ4',
            ownerId: '9KeaYbRLP',
          },
          {
            name: 'Land Cruiser',
            year: 2019,
            price: 290040,
            carNumber: 'AZJZ4',
            ownerId: '9KeaYbRLP',
          },
          {
            name: 'Hilux',
            year: 2020,
            price: 215700,
            carNumber: 'xig8N',
            ownerId: '9KeaYbRLP',
          },
          {
            name: 'Hilux',
            year: 2015,
            price: 178506,
            carNumber: 'ghTiQ',
            ownerId: '9KeaYbRLP',
          },
          {
            name: 'Corolla',
            year: 2002,
            price: 8504,
            carNumber: 'Mvw8T',
            ownerId: '9KeaYbRLP',
          },
        ],
        Chevrolet: [
          {
            name: 'Impala',
            year: 2005,
            price: 9320,
            carNumber: 'BZpkt',
            ownerId: '9KeaYbRLP',
          },
          {
            name: 'Malibu',
            year: 2002,
            price: 4502,
            carNumber: 'KqKV_',
            ownerId: '9KeaYbRLP',
          },
        ],
        Ford: [],
        Alpha_Romeo: [],
      },
    },
    {
      agencyName: 'Carsova',
      cash: 72450,
      credit: 50000,
      agencyId: 'oqQmsZoUo',
      cars: {
        Bmw: [
          {
            name: '7',
            year: 1999,
            price: 24700,
            carNumber: 'sZrjp',
            ownerId: 'oqQmsZoUo',
          },
          {
            name: '3',
            year: 2008,
            price: 54000,
            carNumber: 'da88K',
            ownerId: 'oqQmsZoUo',
          },
        ],
        Toyota: [
          {
            name: 'Prius',
            year: 2019,
            price: 124050,
            carNumber: 'ZfbqH',
            ownerId: 'oqQmsZoUo',
          },
          {
            name: 'Hilux',
            year: 1996,
            price: 11540,
            carNumber: 'AZJZ4',
            ownerId: 'oqQmsZoUo',
          },
        ],
        Ford: [],
        Chevrolet: [],
        Alpha_Romeo: [],
      },
    },
  ],
  customers: [
    {
      name: 'Lilah Goulding',
      id: 'BGzHhjnE8',
      cars: [
        {
          name: 'Corolla',
          year: 2013,
          price: 40570,
          carNumber: '16da1',
          ownerId: 'BGzHhjnE8',
        },
      ],
      cash: 35000,
    },
    {
      name: 'Ravi Murillo',
      id: '2RprZ1dbL',
      cars: [
        {
          name: 'X5',
          year: 2019,
          price: 578054,
          carNumber: 'WIh0U',
          ownerId: '2RprZ1dbL',
        },
        {
          name: 'Spider',
          year: 2012,
          price: 81520,
          carNumber: 'RLS4q',
          ownerId: '2RprZ1dbL',
        },
      ],
      cash: 278542,
    },
    {
      name: 'Aleksander Carr',
      id: 'pAuFtn_WA',
      cars: [
        {
          name: 'Highlander',
          year: 2018,
          price: 214503,
          carNumber: '2WU_y',
          ownerId: 'pAuFtn_WA',
        },
      ],
      cash: 125402,
    },
    {
      name: 'Lana Edge',
      id: 'cnTobUDy6',
      cars: [
        {
          name: 'F250',
          year: 2020,
          price: 198500,
          carNumber: 'Xxcy_',
          ownerId: 'cnTobUDy6',
        },
        {
          name: 'Hilux',
          year: 2005,
          price: 35005,
          carNumber: 'VSCUj',
          ownerId: 'cnTobUDy6',
        },
      ],
      cash: 7000,
    },
    {
      name: 'Nikita Philip',
      id: '5x2tMcX4R',
      cars: [
        {
          name: 'Impala',
          year: 2016,
          price: 65042,
          carNumber: 'LKInp',
          ownerId: '5x2tMcX4R',
        },
      ],
      cash: 40541,
    },
    {
      name: 'Bob Steel',
      id: 'Wm6BkA1F0',
      cars: [],
      cash: 15732,
    },
    {
      name: 'Will Reyes',
      id: 'FQvNsEwLZ',
      cars: [
        { name: 'X6', year: 2020, price: 966500, ownerId: 'FQvNsEwLZ' },
        {
          name: 'Land Cruiser',
          year: 2020,
          price: 336300,
          carNumber: 'vaJvd',
          ownerId: 'FQvNsEwLZ',
        },
        {
          name: 'Romeo Julia',
          year: 2020,
          price: 275406,
          carNumber: 'qLoYR',
          ownerId: 'FQvNsEwLZ',
        },
        {
          name: 'Explorer',
          year: 2020,
          price: 265200,
          carNumber: 'tlGRq',
          ownerId: 'FQvNsEwLZ',
        },
      ],
      cash: 1547242,
    },
  ],
  taxesAuthority: {
    totalTaxesPaid: 0,
    sumOfAllTransactions: 0,
    numberOfTransactions: 0,
  },
};
console.log(ourCarMarket);
//!------------- Agencies Getters ----------------------

//* 1. getAgencyByName
//? @param {array}     - agenciesArr
//? @param {string}    - name - agency name.
//? @return {object[]} - Array of agencies found,
//?                      and if it didn't, return empty array.

const getAgencyByName = (agenciesArr, name) => {
  const sellersArr = [];
  agenciesArr.forEach(element => {
    if (element.agencyName == name) {
      sellersArr.push(element);
    }
  })
  console.log(sellersArr);
  return sellersArr;
}
getAgencyByName(ourCarMarket.sellers,"CarMax") 
      // can also use filter and includes

//* 2. getAgencyById
//? @param {array}   - agenciesArr
//? @param {string}  - id - agency id.
//? @return {string} - agencyId

const getAgencyById = (agenciesArr, id) => {
  const sellersArr1 = [];
  agenciesArr.forEach(element => {
    if (element.agencyId == id) {
      sellersArr1.push(element);
    }
  })
  console.log(sellersArr1);
  return sellersArr1;
}
getAgencyById(ourCarMarket.sellers,'26_IPfHU1') 
// another way is to use find. 

//* 3. getAllAgenciesNameAndId
//? @param {array}     - agenciesArr
//? @return {Object[]} - Array of agency objects.
//?                      The object includes the keys 'name' and 'id'


const getAllAgenciesNameAndId = (agenciesArr) => {
  let sellersArr = [];
  agenciesArr.forEach((element) => {
    let Obj = {};
    Obj.name = element.agencyName;
    Obj.id = element.agencyId;
    sellersArr.push (Obj);
  });
  console.log(sellersArr);
  return sellersArr;
};
getAllAgenciesNameAndId(ourCarMarket.sellers);
// another way is to use map 


//* 4. getCarsToBuy
//? @param {array}    - agenciesArr
//? @return {object[]} - array of cars objects that are for sale

const getCarsToBuy = (agenciesArr) => {
  const res=[]
  agenciesArr.forEach (agency => {
    // ! agency.cars === object
  const cars = agency.cars
  for (let carBrand in cars) {
// cars[carBrand].forEach((car))
// res.push(car);
res.push(...cars[carBrand])
  }
})
return res}
console.log(getCarsToBuy(ourCarMarket.sellers));


//* 5. getCarsToBuyByModel
//? @param {array}     - agenciesArr
//? @param {string}    - carModel
//? @return {object[]} - arrays of cars objects that are for sale by brand

const getCarsToBuyByModel = (agenciesArr, model) => {
  return getCarsToBuy(agenciesArr).filter(car => car.name === model)
//   let carsByModel = [];
//   agenciesArr.forEach(element => {
//     if (element.cars.hasOwnProperty(model)) {
//       carsByModel.push(element.cars[model]);
//     }
//   })
//   console.log(carsByModel);
//   return carsByModel;
};
getCarsToBuyByModel(ourCarMarket.sellers, '3')

//!------------- Customers Getters ----------------------
//* 8. getCustomerByName
//? @param {array}    - customersArr
//? @param {string}    - name - customer name.
//? @return {Object[]} - Array of customers found,
//?                      and if it didn't, return empty array.
//! Question: Why do you think the function returns an array and not the client object?

const getCustomerByName = (customersArr, name) => {
  return customersArr.filter(element => { 
    return element.name.includes (name)
})}
// const getCustomerByName = (CustomersArr, name) => {
//   let Customers = [];
//   CustomersArr.forEach(element => {
//     if (element.Name == name) {
//       Customers.push(element);
//     }
//   })
//   console.log(Customers);
//   return Customers;
// }
getCustomerByName(ourCarMarket.Customers,'Lilah Goulding') 

//* 9. getCustomerById
//? @param {array}  - customersArr
//? @param {string}  - id - customer id
//? @return {string} - agencyId

// const getCustomerById = (CustomersArr, id) => {
//   const Customers = [];
//   CustomersArr.forEach(element => {
//     if (element.id == id) {
//       Customers.push(element);
//     }
//   })
//   console.log(Customers);
//   return Customers;
// }
// getCustomerById(ourCarMarket.Customers,'BGzHhjnE8') 
const getCustomerById = (customersArr, id) => {
return customersArr.find(element => { 
  return element.id === id
})}


//* 10. getAllCustomersCars
//? @param {array}  - customersArr
//? @return {object[]} - customerCarsArr - Array of all customer cars object
const getAllCustomersCars = (customersArr) => {
  //customersArr.map - return arr with the same length
  const res2 = [];
  const res = customersArr.map((customer) => {
    //customer.cars === Array
    //customer.cars - return arr with the same length
    return customer.cars;
  });
  return res.flat();
  //
};
// console.log(getAllCustomersCars(ourCarMarket.customers));
console.log(ourCarMarket);