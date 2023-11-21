import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;
  // console.log("🚀  searchString:", searchString);

  // const foundCountry = countries.find((el) => {
  //   return el.name.toLowerCase().startsWith(searchString);
  // });
  // console.log("🚀  foundCountry:", foundCountry);

  const foundCountries = countries.filter((el) => {
    return el.name.toLowerCase().startsWith(searchString);
  });
  console.log("🚀  foundCountries:", foundCountries);

  // if (foundCountry) {
  //   const countryElement = Country(foundCountry);
  //   container.append(countryElement);
  // }

  foundCountries.forEach((element) => {
    const countryElement = Country(element);
    container.append(countryElement);
  });
});
