function findTime(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM, D, YYYY h:mm A");
    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}

let citySelector = document.querySelector("#cities");

setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDate = losAngelesElement.querySelector(".date");
  let losAngelesTime = losAngelesElement.querySelector(".time");
  let laTime = moment().tz("America/Los_Angeles");
  losAngelesTime.innerHTML = laTime.format("h:mm:ss [<small>]A[</small>]");
  losAngelesDate.innerHTML = laTime.format("MMMM, D, YYYY");
}, 1000);

setInterval(function () {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDate = tokyoElement.querySelector(".date");
  let tokyoJapanTime = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoJapanTime.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
  tokyoDate.innerHTML = tokyoTime.format("MMMM, D, YYYY");
}, 1000);

setInterval(function () {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDate = sydneyElement.querySelector(".date");
  let sydneyAusTime = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/sydney");
  sydneyAusTime.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");
  sydneyDate.innerHTML = sydneyTime.format("MMMM, D, YYYY");
}, 1000);
