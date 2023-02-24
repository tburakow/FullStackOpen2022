import { useState } from 'react'

const getNewRandom = () => {
  return Math.floor((Math.random() * 8))
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
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(Array(8).fill(0))

  const setToSelected = (newSelected) => () => {
    console.log('New value of selected', newSelected) // print the new value of selected to console
    setSelected(newSelected)
  }

  const setToVotes = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    console.log('New votes', newVotes)
    setVotes(newVotes)
  }


  return (
    <div>
      {anecdotes[selected]}
      <br/>
      has {votes[selected]} votes.
      <br/>
      <br/>
      <Button handleClick={setToSelected(getNewRandom())} text="get new anecdote" />
      <Button handleClick={() => setToVotes()} text="Vote for this anecdote" />
    </div>
  )
}

export default App;
