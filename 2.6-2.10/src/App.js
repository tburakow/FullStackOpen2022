import { useState } from 'react'

// This component displayes the information of a single person.
const DisplayPerson = ({ name }) => {
  console.log('person to be displayed (also key):', name)
  return (
    <p>{name}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
    }

    setPersons(persons.concat(nameObject))
    console.log(persons)
    setNewName(' ')
    }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <DisplayPerson name={person.name} key={person.name} />
      )}
    </div>
  )

}

export default App