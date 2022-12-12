const checkbox = document.querySelector(".checkbox");
const image = document.querySelector(".image");


// checkbox.addEventListener("change", function (e) {
//   console.dir(e.target);
//   if (checkbox.checked) {
//     show();
//   } else image.classList.remove("show");
// });

// function show() {
//   image.classList.add("show");
// }

checkbox.addEventListener("change", function (e) {
  console.dir(image)
  image.classList.toggle("show")
})