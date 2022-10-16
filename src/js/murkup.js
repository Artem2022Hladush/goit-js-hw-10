import { getRefs } from '../js/refs';
const { listEl, countryCardEl } = getRefs();

export function getMarkup(countries) {
	countryCardEl.innerHTML = '';
		const markup = countries
   	.sort((a, b) => a.name.common.localeCompare(b.name.common))
   	.map(
      ({ flags, name }) =>
      	`<li><img src="${flags.svg}" alt="Flag: ${name.official}" width="50"><p>${name.common}</p></li>`
   )
   .join('');
	listEl.innerHTML = markup;
}