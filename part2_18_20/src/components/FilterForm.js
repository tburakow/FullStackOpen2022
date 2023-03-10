const FilterForm = ({ value, handleFilterChange }) => {
    console.log('new filter is', value)
    return (  
        <form>
            <div>
                find countries: <input value={value} onChange={handleFilterChange} />
            </div>
        </form>
)
}

export default FilterForm