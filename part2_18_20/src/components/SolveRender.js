import FilterCountries from './FilterCountries'
import {useEffect} from 'react'

const SolveRender = ({ countries, filter, setFiltered, filtered, setMessage }) => {
    
    useEffect(() => {
        FilterCountries(countries, filter, setFiltered, filtered)
    }, [filter, countries, filtered, setFiltered])
   
}
export default SolveRender