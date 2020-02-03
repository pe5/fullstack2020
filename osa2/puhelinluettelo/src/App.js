import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import AddPerson from './components/AddPerson'
import Persons from './components/Persons'
import personService from './services/personService'


const App = () => {
  const [ persons, setPersons] = useState([])
  useEffect(() => {
    console.log('effect')
    personService
        .getAll()
        .then(response => {
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
          if(window.confirm(`${newPerson} is already added to phonebook, replace the old number with a new one?`)) {
            personService
                .update(persons.filter(person => person.name === newPerson)[0].id, personObject)
                .then(response => {
                    personService.getAll().then(response => {
                        setPersons(response.data)
                        })
                    setNewPerson('')
                    setNewNumber('')
                })
          }
      }
      else {
        personService
            .create(personObject)
            .then(response => {
                setPersons(persons.concat(response.data))
                setNewPerson('')
                setNewNumber('')
            })
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
      <Persons persons={persons} newFilter={newFilter} setPersons={setPersons} />
      
    </div>
  )

}

export default App