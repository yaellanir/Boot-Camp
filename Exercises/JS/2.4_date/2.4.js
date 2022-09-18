const today = new Date().getDay();

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayName = weekday[today];
console.log(weekday[today]);

const dayOfMonth = new Date().getUTCDate();
console.log(dayOfMonth);

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "june",
  "july",
  "aug",
  "sep",
  "nov",
  "dec",
];
const CurrentMonth = new Date().getMonth();
const monthName = months[CurrentMonth];
console.log(months[CurrentMonth]);

const CurrentYear = new Date().getFullYear();
console.log(CurrentYear);

function FullDate(day, dayOfMonth, month, year) {
  return `Today is ${day} the ${dayOfMonth} of ${month} ${year}`;
}

console.log(FullDate(dayName, dayOfMonth, monthName, CurrentYear));
