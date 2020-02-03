import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import AddPerson from './components/AddPerson'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons] = useState([])
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, []) 
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
      event.preventDefault()
      const personObject = {
          name: newPerson,
          number: newNumber
      }
      if (persons.filter(person => person.name === newPerson).length > 0) {
          window.alert(`${newPerson} is already added to phonebook`)
      }
      else {
         setPersons(persons.concat(personObject))
        setNewPerson('') 
        setNewNumber('')
      }
      
  }

  const handlePersonChange = (event) => {
      setNewPerson(event.target.value)
  }

  const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
      setNewFilter(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
          <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <AddPerson addPerson={addPerson}
        newPerson={newPerson}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange}
        />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} />
      
    </div>
  )

}

export default App