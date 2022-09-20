function isValidPassword(password) {
  if (password.length > 7) {
    console.log("strong");
  } else {
    return "weak";
  }
}

isValidPassword("yaelljhgjfjydf123");

function isValidPassword1(password) {
  return password.length > 7 ? "strong" : "weak";
}
console.log(isValidPassword1("sgkj"));

function isValidPassword2(password) {
  return password.length > 7 && password.length < 15;
}
console.log(isValidPassword2("s%*($#gk#j"));

function isValidPassword3(password) {
  return password.length > 7 && password.match(/[A-Z]/)
    ? "very strong"
    : password.length > 7
    ? "strong"
    : "weak";
}
console.log(isValidPassword3("sdfTf"));
// if (password.length > 7 && password.match(/[A-Z]/)) {
//     return "very strong";
//   } else if (password.length > 7) {
//     return "strong";
//   } else {
//     return "Weak";
//   }
