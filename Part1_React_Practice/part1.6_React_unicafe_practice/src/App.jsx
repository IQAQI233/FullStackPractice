import { useState } from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>
            <Buttons good={good} neutral={neutral} bad={bad} setGood={setGood} setNeutral={setNeutral} setBad={setBad}/>
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

function Button (props) {
    return (
        <button onClick={props.onClick}>{props.children}</button>
    )
}

function Buttons (props) {
    return (
        <>
            <Button onClick={() => props.setGood(props.good+1)}>good</Button>
            <Button onClick={() => props.setNeutral(props.neutral+1)}>neutral</Button>
            <Button onClick={() => props.setBad(props.bad+1)}>bad</Button>
        </>
    )
}

function Statistics(props) {
    let all = props.good + props.neutral + props.bad
    if (all === 0) {
        return (
            <p>No feedback given</p>
        )
    }
    return (
        <table>
            <tbody>
                <StatisticsLine text="good" value={props.good} />
                <StatisticsLine text="neutral" value={props.neutral} />
                <StatisticsLine text="bad" value={props.bad} />
                <StatisticsLine text="all" value={all} />
                <StatisticsLine text="average" value={(props.good - props.bad) / all} />
                <StatisticsLine text="positive" value={(props.good + props.neutral) / all * 100 + "%"} />
            </tbody>
        </table>
    )
}

const StatisticsLine = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )

}



export default App