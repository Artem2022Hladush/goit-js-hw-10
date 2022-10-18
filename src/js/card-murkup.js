import { refs } from "./refs";

export function infoCountryMarkup(country) {
	const markupCountry = country.map(country => {
		const { name, flags, capital, population, languages } = country;

		const languagesOfCountry = Object.values(languages).join(' , ');
		 
		return`
			<div class="country-info__container">
			<img src="${flags.svg}" width="20" height="20" />
			<p class="country-info__name"><b>${name.official}</b></p>
			</div>
			<p class="country-info__text"><b>Capital:</b> ${capital}</p>
			<p class="country-info__text"><b>Population:</b> ${population}</p>
			<p class="country-info__text"><b>languages:</b> ${languagesOfCountry}</p>`
	}).join(' ');

	return refs.countryInfo.insertAdjacentHTML('beforeend', markupCountry);
}