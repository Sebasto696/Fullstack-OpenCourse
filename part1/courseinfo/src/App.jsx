/* eslint-disable react/prop-types */
import './App.css'
const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14
const totalExercises = 'Number of exercises'
const calculate = exercises1 + exercises2 + exercises3
function App() {

  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }

  const Part = (props) => {
    return (
      <>
        <p>{props.part1} {props.exercises1}</p>
        <p>{props.part2} {props.exercises2}</p>
        <p>{props.part3} {props.exercises3}</p>
      </>
    )
  }

  const Content = () => {
    return (
      <div>
        <Part part1={part1} exercises1={exercises1} />
        <Part part2={part2} exercises2={exercises2} />
        <Part part3={part3} exercises3={exercises3} />
      </div>
    )
  }

  const Total = (props) => {

    return (
      <p>{props.totalExercises} {props.calculate}</p>
    )
  }


  return (
    <div>
      <Header course={course} />
      <Content />
      <Total totalExercises={totalExercises} calculate={calculate} />
    </div>
  )
}

export default App
