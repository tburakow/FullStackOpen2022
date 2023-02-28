const Note = ({ note }) => {
    console.log('Note contents', note)
    return (
        <li>{note.content}</li>
    )
}

export default Note