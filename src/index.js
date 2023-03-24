import './css/styles.css';
import API from './js/fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import getRefs from './js/refs';
import { renderCardCountry, renderInfoCountries } from './js/renderCard';

const refs = getRefs();

refs.inputSeacrh.addEventListener('input', debounce(onSearchCountry, 300));
function onSearchCountry() {
  const countryValue = refs.inputSeacrh.value.trim();
  if (countryValue.trim() === '') {
    return clearInput();
  }
  API(countryValue)
    .then(country => {
      clearInput();
      renderCountryCard(country);
    })
    .catch(() => {
      refs.inputSeacrh.value = '';
      clearInput();
      return Notiflix.Notify.failure(
        'Oops, there is no country with that name'
      );
    });
}

function renderCountryCard(country) {
  console.log(country);
  if (country.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (country.length > 2 && country.length < 10) {
    refs.countryList.innerHTML = renderInfoCountries(country);
  } else if (country.length === 1) {
    refs.countryInfo.innerHTML = renderCardCountry(country);
  }
}
function clearInput() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}
