import React, { useState } from 'react'
import Filter from './components/Filter'
import AddPerson from './components/AddPerson'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0401234567' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
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