import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import NewPerson from './components/NewPerson'
import FilterForm from './components/FilterForm'
import handleChange from './components/handleChange'
import personsService from './services/persons'
import Notification from './components/Notification'
import Error from './components/Error'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [outputMessage, setMessage] = useState(null)
  const [errorMessage, setError] = useState(null)

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
    const id = (persons.find(single => single.name === newName))
    if (persons.find(single => single.name === newName)) {
      if (window.confirm("Name already exists, do you wish to change the associated number?")) {
        handleChange(id, newNumber, newName, setPersons, setMessage, setError)
        setTimeout(() => {
          setMessage(null)
          setError(null)
        }, 5000)
      }
      console.log(persons)
      setNewName('')
      setNewNumber('')
    }
    else {
      personsService      
      .create(nameObject)      
        .then(response => {        
          setPersons(persons.concat(response))
          setMessage(
            `Added '${newName}' to phonebook.`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)            
        })
    }
}
  

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm value={newFilter} handleFilterChange={handleFilterChange} />
      <h2>Add new entry</h2>
      <Notification message={outputMessage} />
      <Error message={errorMessage} />
      <NewPerson name={newName} handleNameChange={handleNameChange} number={newNumber} handleNumberChange={handleNumberChange} addName={addName} />
      <h2>Numbers</h2>
      {persons.map(person =>
        <Filter name={person.name} number={person.number} filter={newFilter} id={person.id} key={person.name} set={setPersons}/>
      )}
    </div>
  )

}

export default App