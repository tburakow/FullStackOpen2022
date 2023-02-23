import { useState } from 'react'

// Button component
const Button = (props) => {
  console.log(props)
  return (
  <button onClick={props.handleClick}>
  {props.text}
  </button>
  )
} 

// Table component, names of first column hardcoded.
const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <td>good</td>
          <td>{props.goodvalue}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{props.neutralvalue}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{props.badvalue}</td>
        </tr>
        <tr>
          <td>total</td>
          <td>{props.totalvalue}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{props.averagevalue}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{props.positivevalue} %</td>
        </tr>
      </thead>
    </table>
  )
}

const Statistics = (props) => {
  console.log("good, neutral and bad inputs", props.good, props.neutral, props.bad)
  let total = props.good + props.neutral + props.bad // The total amount of feedback is formed by adding together the good neutral and bad fields.
  let average = ((props.good * 1) + (props.bad * -1)) / total // Average value of feedback inputs
  let positive = props.good / total * 100 //percentage of positive feedbacks of the total
  if (total === 0) {
    return (
      <div>
        No feedback given.
      </div>
    )
  }
  return (
  <div>
    <Table goodvalue={props.good} neutralvalue={props.neutral} badvalue={props.bad}
    totalvalue={total} averagevalue={average} positivevalue={positive} />
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
