import { refs } from "./refs";

export function listCountriesMarkup(countries) {

   	const markupCountries = countries.map(country => {
      	const { name, flags} = country;

   	return`<li class="country-list__item">
   		<img src="${flags.svg}" width="20" height="20" />
   		<p class="country-list__name">${name.common}</p>
   		</li>`
   	}).join(' ');

   	return refs.countryList.insertAdjacentHTML('beforeend', markupCountries);
}