import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, neutral, bad}) => {
    if((good+neutral+bad) === 0) {
        return (
            <div>
                <p>
                   No feedback given 
                </p>
            </div>
        )
    }
    return (
    <div>
        <h1>
            statistics
        </h1>
    <table>
        <tbody>
            <tr>
                <td>good</td><td>{good}</td>
            </tr>
            <tr>
                <td>neutral</td><td>{neutral}</td>
            </tr>
            <tr>
                <td>bad</td><td>{bad}</td>
            </tr>
            <tr>
                <td>average</td><td>{(good-bad)/(good+neutral+bad)}</td>
            </tr>
            <tr>
                <td>positive</td><td>{good/(good+neutral+bad)*100}%</td>
            </tr>
        </tbody>
    </table>
    </div>
    )
}

const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const StatisticLine = (props) => {
    return (
        <div>
            <p>
                {props.text} {props.value} {props.prsnt}
            </p>
        </div>
    )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>
          give feedback
      </h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
