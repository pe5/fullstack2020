import React from 'react'

const Country = ({country}) => {
    return ( 
        <div>
            <h1>
                {country.name}
            </h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>languages</h2>
            <ul>
                {country.languages.map((language, i) =>
                <li key={language.iso639_1}>
                    {language.name}
                </li>)}
            </ul>
            <img src={country.flag} width='120' height='100' />
        </div>
    )
}

const Countries = ({countries, newFilter}) => {
    if (countries.filter(country => country.name.toLowerCase().includes(newFilter.toLowerCase())).length === 1) {
        return (
            <Country country = {countries.filter(country => country.name.toLowerCase().includes(newFilter.toLowerCase()))[0]} />
        )
    }
    else if (countries.filter(country => country.name.toLowerCase().includes(newFilter.toLowerCase())).length > 1 && countries.filter(country => country.name.toLowerCase().includes(newFilter.toLowerCase())).length < 11) {
        return(
            <div>
                <ul>
                {countries.filter(country => country.name.toLowerCase().includes(newFilter.toLowerCase())).map((country, i) =>
                <li key = {country.capital}>
                    {country.name}
                </li>)
            }
        </ul>
            </div>
        )
        
    }
    else {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
}

export default Countries