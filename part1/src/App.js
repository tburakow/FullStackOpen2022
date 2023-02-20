const Header = (name) => {
  console.log(name)
  return (
    <div>
      <h1>{name.name}</h1>
    </div>
  )
}

const Part = (part) => {
  console.log(part)
  return (
    <div>
      {part.part} {part.exercs}
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0].name} exercs={props.parts[0].exercs}/>
      <Part part={props.parts[1].name} exercs={props.parts[1].exercs}/>
      <Part part={props.parts[2].name} exercs={props.parts[2].exercs}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      {props.parts[0].exercs + props.parts[1].exercs + props.parts[2].exercs}
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercs: 10
      },
      {
        name: 'Using props to pass data',
        exercs: 7
      },
      {
        name: 'State of a component',
        exercs: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;