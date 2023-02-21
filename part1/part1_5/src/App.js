const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      {props.parts[0].name} 
      {' '}
      {props.parts[0].exercises}
      <br />
      {props.parts[1].name} 
      {' '}
      {props.parts[1].exercises}
      <br />
      {props.parts[2].name} 
      {' '}
      {props.parts[2].exercises}
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack Application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'using props to pass data',
        exercises: 7
      },
      {
        name: 'State of component',
        exercises: 14
      }
  ]
}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
