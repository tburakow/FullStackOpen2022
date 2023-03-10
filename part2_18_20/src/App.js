import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Notification from './components/Notification'
import SolveRender from './components/SolveRender'
import FilterForm from './components/FilterForm'

const getCountries = (url) => {
  console.log('url =', url)
  const request = axios.get(url)
  return request.then(response => response.data)
}

const App = () => {
  const sourceUrl = 'https://restcountries.com/v3.1/all'
  const [countries, setCountries] = useState([])
  const [newFilter, setFilter] = useState('')
  const [outputMessage, setMessage] = useState(null)

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  useEffect(() => {
    getCountries(sourceUrl)      
        .then(response => {     
          console.log('countries', response)
          console.log(Object.keys(response.data).length)
          setCountries(response)
        }) 
  }, [newFilter])

  return (
    <div>
      <FilterForm value={newFilter} handleFilterChange={handleFilterChange} />
      <SolveRender countries={countries} filter={newFilter} setMessage={setMessage} />
      <Notification message={outputMessage} />
    </div>
  )
}

export default App;
