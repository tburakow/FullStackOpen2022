const FilterForm = ({ value, handleFilterChange }) => {
    console.log('new filter is', value)
    return (  
        <form>
            <div>
                filter entries with: <input value={value} onChange={handleFilterChange} />
            </div>
        </form>
)
}

export default FilterForm