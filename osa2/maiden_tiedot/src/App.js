import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './Components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, newFilter] = useState('')
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const handleFilter = (event) => {
    newFilter(event.target.value)
  }
  
  return (
    <div>
      <form>
        find countries <input value={filter} onChange={handleFilter} />
      </form>
      <Countries countries={countries} newFilter={filter} />
    </div>
  )
}



export default App;
