import DeleteButton from './Delete'

const Display = ({ name, number, id, set}) => {
    console.log('person to be displayed (also key):', name)
    return (
      <p> {name}, {number}, <DeleteButton id={id} set={set}/></p>
    )
  }

  export default Display