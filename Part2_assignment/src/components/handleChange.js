import Service from '../services/persons'

const handleChange = (id, newNumber, set) => {
    Service
    .ChangeEntry(id, newNumber)
    .then(() => Service.getAll())
        .then(response => {        
          set(response)
        })
}

export default handleChange