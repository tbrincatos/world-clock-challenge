function showNewSelect(event) {
  let africanCountriesElement = document.querySelector("#africanCountries");
  let asianCountriesElement = document.querySelector("#asianCountries");
  let australianCountriesElement = document.querySelector(
    "#australianCountries"
  );
  let europeanCountriesElement = document.querySelector("#europeanCountries");
  let northAmericanCountriesElement = document.querySelector(
    "#northAmericanCountries"
  );
  let southAmericanCountriesElement = document.querySelector(
    "#southAmericanCountries"
  );

  if (event.target.value === "africa") {
    africanCountriesElement.classList.remove("none");
    africanCountriesElement.classList.add("appear");
  } else if (event.target.value === "asia") {
    asianCountriesElement.classList.remove("none");
    asianCountriesElement.classList.add("appear");
  }
  if (event.target.value === "australia-oceania") {
    alert(`Hi Oceania!`);
  }
  if (event.target.value === "europe") {
    alert(`Hi Europe!`);
  }
  if (event.target.value === "north-america") {
    alert(`Hi North America!`);
  }
  if (event.target.value === "south-america") {
    alert(`Hi South America!`);
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
