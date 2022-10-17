// Create a webpage that has an input field for the user’s age and
// a button. If the user enters a number above 18, make the text
// “you can drink appear”. If the user enters a number below 18,
// make the text “you’re too young” appear.

const input = document.querySelector('input');
const form = document.querySelector("form");
// const allValuesFull = [...inputs].every((input) => input.value);
// if (allValuesFull) {
//   form.submit();


input.addEventListener ("input", function (e){
  if (e.target.value >= 18) {
    console.log(`you can drink!`)
  }else 
    console.log(`you're too young'!`)})