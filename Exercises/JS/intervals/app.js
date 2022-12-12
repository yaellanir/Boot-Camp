const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const date = new Date();
// let time = date.getTime();
// console.log(time);

let timeUnit = {
  minute: date.getMinutes(),
  hour: date.getHours(),
  seconds: date.getSeconds(),
};
console.log(timeUnit);

window.addEventListener("load", function (e) {
  minutes.textContent = timeUnit.minute;
  hours.textContent = timeUnit.hour;
  seconds.textContent = timeUnit.seconds;
});

setInterval(updateTime, 1000);
function updateTime() {
  if (seconds.textContent == 59) {
    seconds.textContent = 0;
    if (minutes.textContent == 59) {
      minutes.textContent = 0;
      hours.textContent = parseInt(hours.textContent) + 1;
    } else {
      minutes.textContent = parseInt(minutes.textContent) + 1;
    }
  } else {
    seconds.textContent = parseInt(seconds.textContent) + 1;
  }
}
