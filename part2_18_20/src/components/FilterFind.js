const FilterFind = ({ country, filter }) => {
    console.log('Filter to check against', filter)
    console.log('name to check:', country.name)
    if (country.name.includes(filter) || filter === '') {
      return (
        <div>
          <h1>{country.name}</h1>
          <br></br>
          <p>capital {country.capital}</p>
        </div>
      )
    }
}

export default Filter