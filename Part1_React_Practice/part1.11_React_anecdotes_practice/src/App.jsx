import { useState } from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]

    const [selected, setSelected] = useState(0)
    const length  = anecdotes.length
    const [votes, setVotes] = useState(Array(10).fill(0))
    const [most, setMost] = useState(0)
    const onClick = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))
    }
    const onClick2 = () => {
        const nVotes = [...votes]
        nVotes[selected] += 1
        setVotes(nVotes)
        if (nVotes[selected] >= votes[most]) {
            setMost(selected)
        }
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <button onClick={onClick2}>vote</button>
            <button onClick={onClick}>next anecdote</button>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[most]}</p>
            <p>has {votes[most]} votes</p>
        </div>
    )
}

export default App