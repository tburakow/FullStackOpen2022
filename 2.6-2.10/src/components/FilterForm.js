const Filter = ({ newFilter }) => {
console.log('new filter is', newFilter)
return (  
    <form>
        <div>
            filter entries with: <input value={newFilter} onChange={handleFilterChange} />
        </div>
    </form>
)
}

export default Filter