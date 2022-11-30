function onLoad(value) {
  let cityOneElement = document.querySelector("#cityOne");
  let cityOneDateElement = document.querySelector("#cityOneDate");
  let cityOneTimeElement = document.querySelector("#cityOneTime");
  cityOneElement.innerHTML = value.replace("_", " ").split("/").pop();
  cityOneDateElement.innerHTML = moment().tz(value).format("ddd Do MMM YYYY");
  cityOneTimeElement.innerHTML = moment().tz(value).format("HH:mm");
}

function hideSelect(element) {
  element.classList.remove("appear");
  element.classList.add("none");
}

function showSelect(element) {
  element.classList.add("appear");
  element.classList.remove("none");
}

function showNewSelect(event) {
  let countrySelectionElement = document.querySelectorAll(
    ".country-selection select"
  );

  countrySelectionElement.forEach(hideSelect);

  if (event.target.value === "africa") {
    let africanCountriesElement = document.querySelector("#africanCountries");
    showSelect(africanCountriesElement);
  } else if (event.target.value === "asia") {
    let asianCountriesElement = document.querySelector("#asianCountries");
    showSelect(asianCountriesElement);
  }
  if (event.target.value === "australia-oceania") {
    let australianCountriesElement = document.querySelector(
      "#australianCountries"
    );
    showSelect(australianCountriesElement);
  }
  if (event.target.value === "europe") {
    let europeanCountriesElement = document.querySelector("#europeanCountries");
    showSelect(europeanCountriesElement);
  }
  if (event.target.value === "north-america") {
    let northAmericanCountriesElement = document.querySelector(
      "#northAmericanCountries"
    );
    showSelect(northAmericanCountriesElement);
  }
  if (event.target.value === "south-america") {
    let southAmericanCountriesElement = document.querySelector(
      "#southAmericanCountries"
    );
    showSelect(southAmericanCountriesElement);
  }
}

function showNewCityTime(event) {
  let value = event.target.value;
  onLoad(value);
}

let continentSelect = document.querySelector("#continents");
continentSelect.addEventListener("change", showNewSelect);

let africanCountriesElement = document.querySelector("#africanCountries");
africanCountriesElement.addEventListener("change", showNewCityTime);

let asianCountriesElement = document.querySelector("#asianCountries");
asianCountriesElement.addEventListener("change", showNewCityTime);

let australianCountriesElement = document.querySelector("#australianCountries");
australianCountriesElement.addEventListener("change", showNewCityTime);

let europeanCountriesElement = document.querySelector("#europeanCountries");
europeanCountriesElement.addEventListener("change", showNewCityTime);

let northAmericanCountriesElement = document.querySelector(
  "#northAmericanCountries"
);
northAmericanCountriesElement.addEventListener("change", showNewCityTime);

let southAmericanCountriesElement = document.querySelector(
  "#southAmericanCountries"
);
southAmericanCountriesElement.addEventListener("change", showNewCityTime);

onLoad("Europe/Paris");
