function showNewSelect(event) {
  if (event.target.value === "africa") {
    alert(`Hi Africa!`);
  } else if (event.target.value === "asia") {
    alert(`Hi Asia!`);
  }
  if (event.target.value === "oceania") {
    alert(`Hi Oceania!`);
  }
  if (event.target.value === "europe") {
    alert(`Hi Europe!`);
  }
  if (event.target.value === "northAmerica") {
    alert(`Hi North America!`);
  }
  if (event.target.value === "southAmerica") {
    alert(`Hi South America!`);
  }
}

let continentSelect = document.querySelector("#continents");
continentSelect.addEventListener("change", showNewSelect);
