function updateTime() {
  let austinElement = document.querySelector("#austin");
  if (austinElement) {
    let austinDateElement = austinElement.querySelector(".date");
    let austinTimeElement = austinElement.querySelector(".time");
    let austinTime = moment().tz("America/Chicago");

    austinDateElement.innerHTML = austinTime.format("MMMM Do YYYY");
    austinTimeElement.innerHTML = austinTime.format(
      "h:mm:ss [<small]>A[</small>]"
    );
  }

  let milanElement = document.querySelector("#milan");
  if (milanElement) {
    let milanDateElement = milanElement.querySelector(".date");
    let milanTimeElement = milanElement.querySelector(".time");
    let milanTime = moment().tz("Europe/Madrid");

    milanDateElement.innerHTML = milanTime.format("MMMM Do YYYY");
    milanTimeElement.innerHTML = milanTime.format(
      "h:mm:ss [<small]>A[</small>]"
    );
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
                    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                </div>
                <div class="time">${cityTime.format(
                  "h:mm:ss"
                )}<small>${cityTime.format("A")}</div></div>
`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
