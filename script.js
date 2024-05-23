const result = document.getElementById("result");

//? result numbers
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const milliseconds = document.getElementById("milliseconds");

//? buttons
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

//* ----------------------------------------------

let interval;

startBtn.addEventListener("click", () => {
  let valueMilliseconds = parseInt(milliseconds.innerText);
  let valueSecond = parseInt(seconds.innerText);
  let valueMinutes = parseInt(minutes.innerText);
  let valueHours = parseInt(hours.innerText);

  interval = setInterval(() => {
    valueMilliseconds += 1;

    if (valueMilliseconds === 100) {
      valueMilliseconds = 0;
      valueSecond += 1;
    }
    if (valueSecond === 60) {
      valueSecond = 0;
      valueMinutes += 1;
    }
    if (valueMinutes === 60) {
      valueMinutes = 0;
      valueHours += 1;
    }
    milliseconds.textContent = valueMilliseconds.toString().padStart(2, "0");
    seconds.textContent = valueSecond.toString().padStart(2, "0");
    minutes.textContent = valueMinutes.toString().padStart(2, "0");
    hours.textContent = valueHours.toString().padStart(2, "0");
  }, 10);

  startBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  startBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  milliseconds.textContent = "00";
  seconds.textContent = "00";
  minutes.textContent = "00";
  hours.textContent = "00";

  startBtn.disabled = false;
});
