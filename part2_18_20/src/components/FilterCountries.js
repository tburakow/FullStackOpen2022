import { useState, useEffect } from 'react'



const FilterCountries = ({ countries, filter }) => {
    //console.log('countryName', name)
    console.log('Filter to check against', filter)
    const tempFiltered = ([])
    const countryLength = Object.keys(countries).length
    var i = 0
    for (i = 0; i < countryLength; i++) {
      if (countries[i].name.common.includes(filter) || filter === '') {
        tempFiltered.append(countries[i])
      }
    }
    return (
      tempFiltered
    )
  }

export default FilterCountries