import Display from './Display'

const Filter = ({ name, number, filter, id, set}) => {
    console.log('Filter to check against', filter)
    console.log('name to check:', name)
    if (name.includes(filter) || filter === '') {
      return(<Display name={name} number={number} id={id} set={set}/>
      )
    }
}

export default Filter