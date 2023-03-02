const NewPerson = ({ name, handleNameChange, number, handleNumberChange, addName }) => {
    console.log('Input for the new entry.', name, number)
    return (
        <form onSubmit={addName}>
            <div>
            name: <input value={name} onChange={handleNameChange} />
            </div>
            <div>
            number: <input value={number} onChange={handleNumberChange} />
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default NewPerson