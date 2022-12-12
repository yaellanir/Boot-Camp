function greaterThanTen(number) {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    // const randomNumber = Math.random();
    if (number > 10) {
      resolve();
    } else {
      reject();
    }
    // }, 1000);
  });
}
greaterThanTen(13)
  .then(() => {
    console.log("the number is greater than ten");
  })
  .catch(() => {
    console.log(" error: the number is less than ten");
  });
