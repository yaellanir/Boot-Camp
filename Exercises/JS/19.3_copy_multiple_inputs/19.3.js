const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const button = document.querySelector("button");

const handleInput = (event) => {
  const input = element.target;
  if (input.value.length > 0 && !Number(input.value)) {
    console.log("invalid");
    return;
  }

  input.nextElementSibling.focus();
  if (nextElementSibling && input.value.length > 0) {
    input.nextElementSibling.focus();
  }
  const allValuesFull = [...inputs].every((input) => input.value);
  if (allValuesFull) {
    form.submit();
  }
  // console.log(allValuesFull);
};
inputs.forEach((e) => {
  e.addEventListener("keyup", handleInput);
});

// number 2
const handlePaste = (event) => {
  const paste = event.clipboardData.getData("text");
  console.log(paste);
  // the input copy

  inputs.forEach((input, index) => {
    input.value = paste[index] || "";
  });
};
inputs[0].addEventListener("paste", handlePaste);

// inputs[0].addEventListener("keyup", function(e){
//     inputs[1].focus();
// });
// inputs[1].addEventListener("keydown", function(e){
//     inputs[2].focus();
// });
// inputs[2].addEventListener("keydown", function(e){
//     inputs[3].focus();
// });
// inputs[3].addEventListener("keydown", function(e){
//     inputs[4].focus();
// });
// inputs[4].addEventListener("keydown", function(e){
//     inputs[5].focus();
// });
// inputs[5].addEventListener("keydown", function(e){
//     inputs[6].focus();
// });

// const btn = document.querySelector(".verify");
// btn.addEventListener("click", function logSubmit(event) {
//   log.textContent = `Form Submitted!`;
//   event.preventDefault(); // what is this ?
// });
