function findTime(event) {
  let parisTime = moment()
    .tz("Europe/Paris")
    .format("dddd, MMMM, D, YYYY h:mm A");
  let tokyoTime = moment()
    .tz("Asia/Tokyo")
    .format("dddd, MMMM, D, YYYY h:mm A");
  let sydneyTime = moment()
    .tz("Australia/Sydney")
    .format("dddd, MMMM, D, YYYY h:mm A");

  if (event.target.value.length > 0) {
    if (event.target.value === "paris") {
      alert(`It is ${parisTime} in Europe/Paris`);
    }
    if (event.target.value === "tokyo") {
      alert(`It is ${tokyoTime} in Europe/Paris`);
    }

    if (event.target.value === "sydney") {
      alert(`It is ${sydneyTime} in Australia/Sydney`);
    }
  }
}

let citySelector = document.querySelector("#cities");
citySelector.addEventListener("change", findTime);
