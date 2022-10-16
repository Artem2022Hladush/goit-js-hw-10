import './css/styles.css';

const DEBOUNCE_DELAY = 300;

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'debounce';
import { getRefs } from './js/refs';
import { fetchCountries } from './js/fetch-countries';
import { getCardMarkup } from './js/card-murkup';
import { getMarkup} from './js/murkup'

const { inputEl, listEl } = getRefs();

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));


function onInput(event) {
	const userData = event.target.value.trim();
		if (userData === '') {
   		listEl.innerHTML = '';
   		return;
	}
	fetchCountries(userData)
   	.then(response => {
      if (response.length > 10) {
      	return Notify.info(
         	'Too many matches found. Please enter a more specific name.');
      }
      if (response.length > 1 && response.length <= 10) {
      	getMarkup(response);
      	return;
      }
      if (response.length === 1) {
      	getCardMarkup(response[0]);
      }
	})
   	.catch(error => Notify.failure('Oops, there is no country with that name'));
}