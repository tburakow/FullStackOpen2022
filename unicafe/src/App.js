import { useState } from 'react'

const Display = (props) => {
  console.log(props)
  return (
  <div>
    {props.name} {props.value}
  </div>
  )
}

const Button = (props) => {
  console.log(props)
  return (
  <button onClick={props.handleClick}>
  {props.text}
  </button>
  )
} 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newGood) => () => {
    console.log('New amount of good', newGood) // print the new amount of good reviews to console
    setGood(newGood)
  }

  const setToNeutral = (newNeutral) => () => {
    console.log('New amount of neutral', newNeutral) // print the new amount of neutral reviews to console
    setNeutral(newNeutral)
  }

  const setToBad = (newBad) => () => {
    console.log('New amount of bad', newBad) // print the new amount of bad reviews to console
    setBad(newBad)
  }

  return (
    <div>
      <h2>Give feedback below</h2>
      <Button handleClick={setToGood(good + 1)} text="good" />
      <Button handleClick={setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={setToBad(bad + 1)} text="bad" />
      <br/>
      <h2>Statistics</h2>
      <Display name="good" value={good} />
      <Display name="neutral" value={neutral} />
      <Display name="bad" value={bad} />
    </div>
  )
}

export default App
