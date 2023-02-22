import { useState } from 'react'

const Display = (props) => {
  console.log(props)
  return (
  <div>
    {props.name} {props.value} {props.additional}
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

const Statistics = (props) => {
  console.log("good, neutral and bad inputs", props.good, props.neutral, props.bad)
  let total = props.good + props.neutral + props.bad // The total amount of feedback is formed by adding together the good neutral and bad fields.
  let average = ((props.good * 1) + (props.bad * -1)) / total // Average value of feedback inputs
  let positive = props.good / total * 100 //percentage of positive feedbacks of the total
  return (
  <div>
    <Display name="total" value={total} />
    <Display name="average" value={average} />
    <Display name="positive" value={positive} additional='%' />
  </div>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
