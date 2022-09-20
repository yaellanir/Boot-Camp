function numberOfNativeSpeakers(language) {
  switch (language) {
    case "mandarin":
      console.log("MOST number of native speakers!");
      break;
    case "spanish":
      console.log("2nd place in a number of native speakers");
      break;
    case "english":
      console.log("3rd place in a number of native speakers");
      break;
    case "hindi":
      console.log("number 4");
      break;
    case "arabic":
      console.log("5th most spoken language");
      break;
    default:
      console.log("not in the top 5");
  }
}
console.log(numberOfNativeSpeakers("hebrew"));
