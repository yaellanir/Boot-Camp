const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const milliseconds = document.querySelector(".milliseconds");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
let timer ;  
let timeUnit = {
  minutes: 0 ,
  seconds: 0,
  milliseconds: 0,
};
console.log(timeUnit);

window.addEventListener("load", function (e) {
  minutes.textContent = timeUnit.minutes;
  seconds.textContent = timeUnit.seconds;
  milliseconds.textContent = timeUnit.milliseconds;
});

start.addEventListener("click", function (e) {
timer =setInterval(updateTime, 16);

})
stop.addEventListener("click", function (e) {
  clearInterval(timer);

})


function updateTime() {
  if (milliseconds.textContent == 60) {
    milliseconds.textContent = 0;
    if (seconds.textContent == 59) {
      seconds.textContent = 0;
      minutes.textContent = parseInt(minutes.textContent) + 1;
    } else {
      seconds.textContent = parseInt(seconds.textContent) + 1;
    }
  } else {
    milliseconds.textContent = parseInt(milliseconds.textContent) + 1;
  }
}
