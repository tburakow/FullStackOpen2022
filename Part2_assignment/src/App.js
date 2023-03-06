import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import NewPerson from './components/NewPerson'
import FilterForm from './components/FilterForm'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  useEffect(() => {
    personsService      
      .getAll()      
        .then(response => {        
          setPersons(response)
        }) 
  }, [])

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    if (persons.find(single => single.name === newName) === undefined) {
      personsService      
        .create(nameObject)      
          .then(response => {        
            setPersons(persons.concat(response))            
          })
    console.log(persons)
    setNewName('')
    setNewNumber('')
    }
    else {
      alert(`${newName} is already in the phonebook`)
    }
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm value={newFilter} handleFilterChange={handleFilterChange} />
      <h2>Add new entry</h2>
      <NewPerson name={newName} handleNameChange={handleNameChange} number={newNumber} handleNumberChange={handleNumberChange} addName={addName} />
      <h2>Numbers</h2>
      {persons.map(person =>
        <Filter name={person.name} number={person.number} filter={newFilter} key={person.name} />
      )}
    </div>
  )

}

export default App