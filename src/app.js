function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDate = losAngelesElement.querySelector(".date");
    let losAngelesTime = losAngelesElement.querySelector(".time");
    let laTime = moment().tz("America/Los_Angeles");
    losAngelesTime.innerHTML = laTime.format("h:mm:ss [<small>]A[</small>]");
    losAngelesDate.innerHTML = laTime.format("MMMM, D, YYYY");
  }
  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDate = tokyoElement.querySelector(".date");
    let tokyoJapanTime = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");
    tokyoJapanTime.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
    tokyoDate.innerHTML = tokyoTime.format("MMMM, D, YYYY");
  }
  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydney) {
    let sydneyDate = sydneyElement.querySelector(".date");
    let sydneyAusTime = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/sydney");
    sydneyAusTime.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");
    sydneyDate.innerHTML = sydneyTime.format("MMMM, D, YYYY");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
  <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM, D, YYYY")}</div>
  </div>
  <div class="time">
    ${cityTime.format("h:mm [<small>]A[</small>]")}
  </div>
</div>`;
}

updateTime();
setInterval(updateTime, 1000);
let citySelector = document.querySelector("#city");
citySelector.addEventListener("change", updateCity);
