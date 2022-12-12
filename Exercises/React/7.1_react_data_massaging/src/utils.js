import data from "./data"


function getNames(arr) {
  const arrNames = arr.map(element => {
    return element.name
  })
  
  return arrNames
}

function bornBefore1990(arr) {
  const arrYear = arr.filter(element => {
    const year = element.birthday.substring(element.birthday.length - 4)
    // if (year < 1990) {
    //   return true
      
    // }else {
    //   return false
    // }
    return year < 1990
  })
  return arrYear
}

export {getNames, bornBefore1990}