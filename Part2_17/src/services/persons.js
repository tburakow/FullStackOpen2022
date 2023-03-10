import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons/'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const DeleteEntry = (id) => {
  console.log('deleting entry nro:', id)
  const request = axios.delete(`${baseUrl}${id}`)
  return request.then(response => response)
}

const ChangeEntry = ( id, newNumber ) => {
  console.log('entry being changed (id):', id)
  console.log('new number for entry:', newNumber)
  const request = axios.put(`${baseUrl}${id.id}`, {name: id.name, number: newNumber})
  return request.then(response => response.data)
}

export default { 
  getAll: getAll, 
  create: create,
  DeleteEntry: DeleteEntry,
  ChangeEntry: ChangeEntry
}