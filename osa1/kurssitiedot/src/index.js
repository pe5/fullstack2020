import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1>
                {props.course}
            </h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>
               {props.part} {props.nro} 
            </p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.p1} nro={props.e1} />
            <Part part={props.p2} nro={props.e2} />
            <Part part={props.p3} nro={props.e3} />
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            Number of exercises: {props.a + props.b + props.c}
        </div>
    )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content p1={part1} p2={part2} p3={part3} e1={exercises1} e2={exercises2} e3={exercises3} />
      <Total a={exercises1} b={exercises2} c={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))