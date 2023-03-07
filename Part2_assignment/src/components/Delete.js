import Service from '../services/persons'

const DeleteButton = ({ id , set }) => {
    console.log('person to delete', id)
    return (
      <button type="delete" onClick={() => {
        Service.DeleteEntry(id)
        .then(() => Service.getAll())
        .then(response => {        
          set(response)
        })
      }}>delete</button>
    )
  }

export default DeleteButton
