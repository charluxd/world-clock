function updateTime() {
  // Singapore Time
  let SingaporeElement = document.querySelector("#singapore");
  if (SingaporeElement) {
    let SingaporeDateElement = SingaporeElement.querySelector(".date");
    let SingaporeTimeElement = SingaporeElement.querySelector(".time");
    let SingaporeTime = moment().tz("Asia/Singapore");

    SingaporeDateElement.innerHTML = moment().format("MMMM Do YYYY");
    SingaporeTimeElement.innerHTML = SingaporeTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  //los Angeles Time
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1].replace("_", " ");
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
        <div class="city-details">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "hh:mm:ss"
        )}<small>${cityTime.format("  A")}</small>
        </div>
    </div><div class="city-link"><a href="/">View All Cities</a></div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#select-city");
citiesSelectElement.addEventListener("change", updateCity);
