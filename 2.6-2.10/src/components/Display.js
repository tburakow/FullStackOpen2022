const Display = ({ name, number }) => {
    console.log('person to be displayed (also key):', name)
    return (
      <p>{name} {number}</p>
    )
  }

  export default Display