import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>
                {props.course}
            </h1>
        </div>
    )
}

const Part = ({parts}) => {
    return (
        <div>
            <li>
               {parts.name} {parts.exercises} 
            </li>
        </div>
    )
}

const Content = ({sisalto}) => {
    return (
        <div>
            <ul>
                {sisalto.map((parts, i) => 
                <Part key = {i} parts={parts} />)}
            </ul>
        </div>  
    )
}

const Total = ({sisalto}) => {
    return (
        <div>
            total of {sisalto.reduce((s,p) => s+p.exercises,0)} exercises
        </div>
    )
}

const Course = ({sisalto}) => {
    return (
    <div>
        <Header course={sisalto.name} />
        <Content sisalto={sisalto.parts} />
        <Total sisalto={sisalto.parts} />
    </div>
    )
}

export default Course