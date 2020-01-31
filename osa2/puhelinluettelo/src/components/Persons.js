import React from 'react'

const Persons = ({persons, newFilter}) => {
    return (
        <ul>
          {persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())).map((person, i) => 
          <p key = {person.name}>
                {person.name} {person.number}
          </p>
            )}
      </ul>
    )
}

export default Persons