const arr = ["hello", "what", "railroad", "crazy"];
const arr2 = ["hello", 3324256, "what", "railroad", "crazy"];

// function makeAllCaps(arr) {
//   return new Promise((resolve, reject) => {
//     let capitalizedArray = [];
//     arr.forEach((word) => {
//       if (word.toString().match(/^[A-Za-z]/)) {
//         capitalizedArray.push(word.toUpperCase());
//       } else {
//         reject({ status: 404, error: "only strings allowed" });
//       }
//     });
//     resolve({ status: 200, capitalizedArray });
//   });
// }
// function sortWords(arr) {
//   return new Promise((resolve, reject) => {
//     arr.forEach((e) => {
//       if (e.match(/^[A-Za-z]/)) {
//       } else {
//         reject({ status: 404, error: "only strings allowed" });
//       }
//     });
//     let sortedArray = arr.sort();
//     resolve({ status: 200, data: sortedArray });
//   });
// }

// makeAllCaps(arr2)
//   .then((resolve) => {
//     console.log("makeAllCaps Resolve: ", resolve.capitalizedArray);
//     return sortWords(resolve.capitalizedArray);
//   })
//   .then((resolve) => {
//     console.log(resolve.data);
//     return resolve.data;
//   })
//   .catch((error) => {
//     console.log(error);
//     return error.error;
//   });

function createPromise(str) {
  return new Promise((resolve, reject) => {
    if (typeof str == "string") {
      resolve({ data: str });
    } else {
      reject({ error: "Not a string" });
    }
  });
}

createPromise(12)
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => console.log(err.error));

  