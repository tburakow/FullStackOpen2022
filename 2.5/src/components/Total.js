const Total = ( {parts} ) => {
    console.log('parts coming in for counting total amount of exercises in this course', parts)
    const total =
    parts.reduce((previousTotal, addToTotal) => previousTotal+addToTotal.exercises, 0)
    console.log('Total is', total)
    return (total)
}

export default Total