import Service from '../services/persons'

const handleChange = (id, newNumber, name, setPersons, setMessage, setError) => {
    Service
    .ChangeEntry(id, newNumber)
    .then(() => Service.getAll())
        .then(response => {        
          setPersons(response)
          setMessage(`Changed number for '${name}'`)
        })
        .catch(error => {
          setError(
            `'${name}' was already deleted from server`
          )
        })
}

export default handleChange