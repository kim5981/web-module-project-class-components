import React from 'react'
import Form from "./Form"
import List from "./TodoList"


let index = 0;
const getIndex = () => index++

const toDos = [
  { id: getIndex(), todoInput: "module project", completed: false },
  { id: getIndex(), todoInput: "file taxes", completed: false }
];


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      toDos: toDos
    }
  }

  changeInput = ( key, value ) => {
    this.setState( {
      ...this.state, form: { ...this.state.form, [ key ]: value }
    } )
  }

  addToDo = (task) => {

    const newTask = {
      id: getIndex(),
      name: task,
      completed: false
    }

    this.setState({
      ...this.state, 
        toDos: [ ...this.state.toDos, newTask ]
    })
  }

  toggleCompleted = id => {
    //map over array, when item we clicked is found, toggle completed field
    // else return elem 
    const { toDos } = this.state;
    this.setState({
      toDos: toDos.map( toDo => {
        if ( id === toDo.id ) {
          return {
            ...toDo, 
          completed: !toDo.completed
          }
        }
        return toDo;
      })
    })

  }

  render() {
    console.log("state is: ", this.state);
    return (
      <>
      <div>
        <h1>Let&apos;s Get Stuff Done!</h1>
        <Form addToDo={ this.addToDo } />
      </div>
        
        <List 
          tasks={ this.state.toDos }
          toggleCompleted={ this.toggleCompleted }
        />
      </>
    )
  }
}
