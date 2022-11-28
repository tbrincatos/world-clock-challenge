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

let continentSelect = document.querySelector("#continents");
continentSelect.addEventListener("change", showNewSelect);

/* africa: "Africa/Cairo",
  "Africa/Dakar",
  "Africa/Johannesburg",
  "Africa/Nairobi",
  "Africa/Niamey";
  
  america: "America/Edmonton", "America/Los_Angeles", "America/New_York", "America/Mexico_City", "America/St_Johns"
  
  south: "America/Argentina/Buenos_Aires", "America/Belem" "America/Bogota", "America/Caracas", "America/Santiago"

  europe: "

"Europe/Helsinki", "Europe/Istanbul", "Europe/London", "Europe/Paris", "Asia/Tbilisi"

asia : Asia/Bangkok, Asia/Colombo,Asia/Magadan, Asia/Shanghai, Asia/Tokyo

oceania: Pacific/Auckland, Australia/Darwin, Pacific/Fiji, Australia/Perth,  Australia/Sydney*/
