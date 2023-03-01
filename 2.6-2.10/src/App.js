import { useState } from 'react'
import Filter from './components/Filter'
import NewPerson from './components/NewPerson'
import FilterForm from './components/FilterForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234987' },
    { name: 'Torspo Van Halen', number: '343-3434567'},
    { name: 'Elvis Mayweather', number: '903-5678906'},
    { name: 'Plato Papadokakis', number: '903-5431617'},
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')


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
    setPersons(persons.concat(nameObject))
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
      <form>
        <div>
          filter entries with: <input value={newFilter} onChange={handleFilterChange} />
        </div>
      </form>
      <h2>Add new entry</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <Filter name={person.name} number={person.number} filter={newFilter} key={person.name} />
      )}
    </div>
  )

}

export default App