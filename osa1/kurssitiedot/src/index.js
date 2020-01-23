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
    const [first, second, third] = props.lista
    return (
        <div>
            <Part part={first.name} nro={first.exercises} />
            <Part part={second.name} nro={second.exercises} />
            <Part part={third.name} nro={third.exercises} />
        </div>
    )
}

const Total = (props) => {
    const [first, second, third] = props.lista
    return (
        <div>
            Number of exercises: {first.exercises + second.exercises + third.exercises}
        </div>
    )
}

const App = () => {
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
      <Content lista={course.parts} />
      <Total lista={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))