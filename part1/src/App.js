const Header = (course) => {
  console.log(course)
  return (
    <div>
      <h1>{course.course}</h1>
    </div>
  )
}

const Content = (part) => {
  console.log(part)
  return (
    <div>
      {part.part} {part.exercs}
    </div>
  )
}

const Total = (numbers) => {
  console.log(numbers)
  return (
    <div>
      {numbers.one + numbers.two + numbers.three}
    </div>
  )
}

const App = () => {
  const course = 'Half Stack Application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'using props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercs={exercises1} />
      <Content part={part2} exercs={exercises2} />
      <Content part={part3} exercs={exercises3} />
      <Total one={exercises1} two={exercises2} three={exercises3} />
    </div>
  )
}

export default App;