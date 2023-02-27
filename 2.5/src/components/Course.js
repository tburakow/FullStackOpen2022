import Total from './Total'
import Part from './Part'

const Course = ({ course }) => {
    console.log('inputs from App', course)
    return (
        <div>
            <h2>{course.name}</h2>
            {course.parts.map(part =>
                <Part name={part.name} exercises={part.exercises} key={part.id} />
            )}
            <b>Total number of exercises <Total parts={course.parts} /></b>
        </div>
    )
}

export default Course