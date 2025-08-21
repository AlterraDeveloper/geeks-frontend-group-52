// const days = document.querySelector("#days");
// const hours = document.querySelector("#hours");
// const minutes = document.querySelector("#minutes");
// const seconds = document.querySelector("#seconds");

// ES2015 - ES5
// ES6+
// ECMA
// ECMAScript - ES

const spans = document.querySelectorAll(".countdown-item .number");
// ... dusctructuring operator - деструктуризация
const [days, hours, minutes, seconds] = [...spans];

// days.textContent = "01";
// hours.textContent = "02";
// minutes.textContent = "03";
// seconds.textContent = "04";

function countdown() {
  const eventDate = moment("31/08/2025 12:00:00", "DD/MM/YYYY hh:mm:ss");

  const now = moment();

  const dateDiff = moment.duration(eventDate.diff(now));

  days.textContent = Math.floor(dateDiff.asDays()).toString().padStart(2, "0");
  hours.textContent = dateDiff.hours().toString().padStart(2, "0");
  minutes.textContent = dateDiff.minutes().toString().padStart(2, "0");
  seconds.textContent = dateDiff.seconds().toString().padStart(2, "0");
}

function setBackgroundByTime() {
  const background = document.querySelector(".countdown");
  const hours = moment().hours();

  if (hours >= 7 && hours < 18) {
    background.style.backgroundImage = "url(./images/day.jpg)";
  }

  if (hours >= 18 && hours < 21) {
    background.style.backgroundImage = "url(./images/evening.jpg)";
  }

  if (hours < 7 || hours >= 21) {
    background.style.backgroundImage = "url(./images/night.jpg)";
  }
}

setInterval(countdown, 1000);
setInterval(setBackgroundByTime, 5 * 1000);