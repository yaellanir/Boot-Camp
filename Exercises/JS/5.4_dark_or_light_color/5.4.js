function darkOrLightColor(color) {
  let color1 = color.toLowerCase();

  switch (color1) {
    case "yellow":
    case "pink":
    case "orange":
      console.log("light color");
      break;
    case "blue":
    case "purple":
    case "brown":
      console.log("dark color");
      break;
    default:
      console.log("unknown color");
  }
}
console.log(darkOrLightColor("Blue"));
