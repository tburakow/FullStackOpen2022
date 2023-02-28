import { useState } from 'react'

// This component displayes the information of a single person.
const DisplayPerson = ({ name, number }) => {
  console.log('person to be displayed (also key):', name)
  return (
    <p>{name} {number}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234987' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
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
        <DisplayPerson name={person.name} number={person.number} key={person.name} />
      )}
    </div>
  )

}

export default App