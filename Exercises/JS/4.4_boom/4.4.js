function boom(n) {
  count = 0;
  for (let index = 1; index <= n; index++) {
    if (index % 7 === 0 && index.toString().includes("7")) {
      console.log("BOOM-BOOM");
    } else if (index % 7 === 0) {
      console.log("BOOM");
    } else {
      console.log(index);
    }
  }
}
console.log(boom(50));
