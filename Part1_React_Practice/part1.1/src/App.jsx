import { useState } from 'react'

const App = () => {
    const [counter, setCounter] = useState(0)
    setTimeout( () => setCounter(counter + 1), 1000)
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts}  />
        </div>
    )
}

const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}

function Content(props) {
    return (
        <>
            {props.parts.map(value => <Part p={value}/>)}
        </>
    )
}

function Total(props) {
    let totals = 0
    props.parts.forEach(part => {totals += part.exercises})
    return (
        <p>
            Number of exercises {totals}
        </p>
    )
}

function Part(props) {
    return <p>{props.p.name} {props.p.exercises}</p>
}

export default App


