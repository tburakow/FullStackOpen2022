import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Notification from './components/Notification'
import SolveRender from './components/SolveRender'
import FilterForm from './components/FilterForm'
import FilterCountries from './components/FilterCountries'

const DisplayMultiple = (country) => {
  console.log('country is:', country)
  return (
    <p>
      {country.name.common}
    </p>
  )
}

const ResolveCountries = ({ countries, filter }) => {
  console.log('Countries at ResolveCountries', countries)
  console.log('filter at ResolveCountries', filter)
  const [filtered, setFiltered] = useState([])
  var filtLength = 0

  if (!countries) {
    return (null)
  }
  if (countries) {
    setFiltered(FilterCountries( countries, filter ))
  }
  return (
    <div>
      {filtered.map(country =>
        <DisplayMultiple country={country}/>
      )}
    </div>
  )
}


const getCountries = (url) => {
  console.log('url =', url)
  const request = axios.get(url)
  return request.then(response => response.data)
}

const App = () => {
  const sourceUrl = 'https://restcountries.com/v3.1/all'
  const [newFilter, setFilter] = useState('')
  const [outputMessage, setMessage] = useState(null)
  const [countries, setCountries] = useState([])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  useEffect(() => {
    getCountries(sourceUrl)      
        .then(response => {     
          console.log(Object.keys(response).length)
          console.log(response)
          setCountries(response)
        }) 
  }, [])

  return (
    <div>
      <FilterForm value={newFilter} handleFilterChange={handleFilterChange} />
      <ResolveCountries countries={countries} filter={newFilter}/>
      <Notification message={outputMessage} />
    </div>
  )
}

export default App;

//<SolveRender countries={countries} filter={newFilter} setMessage={setMessage} />

//useEffect(() => {
//  FilterCountries( countries, filter )      
//      .then(response => {     
//        filtLength = Object.keys(response).length
//        console.log('filtLength', filtLength)
//        console.log(response)
//        setFiltered(response)
//      }) 
//}, [ countries, filter ])