const formUser = document.querySelector("#signupForm");
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const emailInput = document.querySelector("#email");
const submitInput = document.querySelector("#submitbtn");
const confirmChangeBtn = document.querySelector(".confirm-change");
const change = document.querySelector(".change");
const confirmBtn = document.querySelector(".confirmBtn");
const newTextBox = document.querySelector("#newTextBox");
let text = document.createTextNode("");
text = "";

formUser.addEventListener("submit", function (e) {
  console.log(e.target.submitInput);
  e.preventDefault(); //stops the request from being sent (prevents page reload)
  if (
    nameInput.value !== "" &&
    ageInput.value !== "" &&
    emailInput.value !== ""
  ) {
    console.log("nameInput", nameInput.value);
    console.log("ageInput", ageInput.value);
    console.log("emailInput", emailInput.value);
    onCLickButton();
    console.log(newTextBox);
  }
});

function onCLickButton() {
  if (
    nameInput.value !== "" &&
    ageInput.value !== "" &&
    emailInput.value !== ""
  ) {
    confirm(`congratulations you successfully sent this form.
  YourName: ${nameInput.value}
  YourAge: ${ageInput.value}
  YourEmail: ${emailInput.value}
  `);

    //   text = `congratulations you successfully sent this form.
    // your details are: ${nameInput.value} ${ageInput.value} ${emailInput.value}`;
    // newTextBox.append(text);
    // console.log(newTextBox);
  }
}

submitInput.addEventListener("click", function (e) {
  console.dir(e.target);
  if (submitInput) {
    e.preventDefault();
    confirmChangeBtn.classList.add("btnShow");
    console.log("opened options");
  }
});

change.addEventListener("click", function (e) {
  console.dir(e.target);
  if (change) {
    e.preventDefault();
    confirmChangeBtn.classList.remove("btnShow");
    nameInput.value = "";
    ageInput.value = "";
    emailInput.value = "";
    console.log("reset");
  }
});

confirmBtn.addEventListener("click", function (e) {
  console.dir(e.target);
  if (confirmBtn) {
    formUser.submit();
    console.log("submitted");
  }
});
