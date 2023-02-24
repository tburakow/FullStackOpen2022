import { useState } from 'react'


// Returns the index of the anecdote with the highest vote count.
// If equal, the one with the smallest index number is returned.
const getHighestVotes = (votes) => {
  console.log("Points", votes)
  var high = 0
  var newHigh = 0 
  var i
  for(i=0; i < votes.length; i++){
    if(votes[i] > votes[high]){
      newHigh = i
      high = newHigh
    }
  }
  return (high)
}

// Gets a new random number (a new anecdote) on the range 0 - 7
const getNewRandom = () => {
  return Math.floor((Math.random() * 7))
}

// Handles button presses.
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
    const newVotes = [...votes] // Get the new votes from old votes
    newVotes[selected] += 1 // Add to the votes of the anecdote pointed to by selected
    console.log('New votes', newVotes) // Log the new votes
    setVotes(newVotes) // Set the votes as newVotes
  }


  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <br/>
      has {votes[selected]} votes.
      <br/>
      <br/>
      <Button handleClick={setToSelected(getNewRandom())} text="get new anecdote" />
      <Button handleClick={() => setToVotes()} text="Vote for this anecdote" />
      <h2>Anecdote with the most votes</h2>
      {anecdotes[getHighestVotes(votes)]}
      <br/>
      {votes[getHighestVotes(votes)]}
    </div>
  )
}

export default App;
