export function renderCardCountry(country){
    return country.map(country =>{
        return `<div>
        <img src="${country.flags.svg}" alt="${country.name.official}" width ="50px">
        <span>${country.name.common}</span>
        <p>Capital:${country.capital}</p>
        <p>Population:${country.population}</p>
        <p>Languages:${Object.values(country.languages)}</p>
       
       </div>`

    }).join('');

};

export function renderInfoCountries(countries){
    return countries.map(country =>{
        return `<div>
        <img src="${country.flags.svg}" alt="${country.name.official}" width ="50px">
        <span>${country.name.common}</span>
       </div>`
    }).join('');

}
