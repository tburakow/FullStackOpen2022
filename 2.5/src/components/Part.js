const Part = (part) => {
    console.log('contents of a single part', part)
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

export default Part