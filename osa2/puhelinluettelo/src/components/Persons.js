import React from 'react'
import personService from '../services/personService'

const Persons = ({persons, setPersons, newFilter, setAddMessage}) => {
    return (
        <ul>
          {persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())).map((person, i) => 
          <p key = {person.name}>
                {person.name} {person.number}
                <button type='submit' onClick={() => 
                  {if(window.confirm(`Delete ${person.name}?`)) {
                    personService.remove(person.id).then(response => {
                      personService.getAll().then(response => {
                      setPersons(response.data)
                      })
                    })
                    setAddMessage(`Deleted ${person.name}`)
                    setTimeout(() => {
                        setAddMessage(null)
                    }, 3000)
                  }
          }}>delete</button>
          </p>
            )}
      </ul>
    )
}


export default Persons