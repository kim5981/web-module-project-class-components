import React from 'react'
import Form from "./Form"
import List from "./TodoList"


let index = 0;
const getIndex = () => index++

const toDos = [
  { id: getIndex(), taskName: "module project", completed: false },
  { id: getIndex(), taskName: "file taxes", completed: false }
];


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      toDos: toDos
    }
  }


  addTask = ( evt, task ) => {
    const newTask = {
      id: getIndex(),
      taskName: task,
      completed: false
    }
    this.setState({
      toDos: [ ...this.state.toDos, newTask ]
    })
  }

  clearTasks = () => {
    this.setState({
      ...this.state,
      toDos: this.state.toDos.filter( toDo => {
        return toDo.completed === false
    } )
  })
  }

  toggleCompleted = id => {
    this.setState({
      toDos: this.state.toDos.map( task => {
        if ( id === task.id ) {
          return { ...task, completed: !task.completed }
        }
        return task
      } )
    })
  }

  render() {
    console.log("state is: ", this.state);
    return (
      <>
      <div>
        <h1>Let&apos;s Get Stuff Done!</h1>
        <Form addTask={ this.addTask } />
      </div>
        
        <List
          tasks={ this.state.toDos }
          toggleCompleted = { this.toggleCompleted }    
        />
        <button onClick={ this.clearTasks }> Clear Completed </button>
      </>
    )
  }
}
