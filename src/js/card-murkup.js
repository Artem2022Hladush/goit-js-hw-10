import { getRefs } from '../js/refs';
const { listEl, countryCardEl } = getRefs();

export function getCardMarkup(country) {
	listEl.innerHTML = '';
	const { flags, name, capital, population, languages } = country;
	countryCardEl.innerHTML =
   	/*html*/
   	`<div class="card-box">
      	<img src="${flags.svg}" alt="Flag: ${name.official}" width="50"/>
      	<h2>${name.common}</h2>
   	</div>
   	<ul>
      	<li><span>Capital: </span>${capital}</li>
      	<li><span>Population: </span>${population}</li>
      	<li><span>Languages: </span>${Object.values(languages).join(', ')}</li>
   	</ul>`;
}