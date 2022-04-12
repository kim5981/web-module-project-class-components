import React from 'react'
import Form from "./Form"

/**
 *  all app data, handler fn's stored here 
 */

// create id's
let index = 0;
const getIndex = () => index++
//set state
const toDos = [
  { id: getIndex(), todoInput: "module project" },
  { id: getIndex(), todoInput: "file taxes" }
];
const initialList = {
   toDos,
   form: {
    id: getIndex(),
    todoInput:  "",
    completed: false
   }
  }


export default class App extends React.Component {
  state = initialList

  changeInput = ( key, value ) => {
    this.setState( {
      ...this.state, form: { ...this.state.form, [ key ]: value }
    } )
  }

  addToDo = () => {

    const newToDo = {
      id: getIndex(),
      todoInput: this.state.todoInput,
      completed: false
    }

    this.setState({
      ...this.state,
        form: initialList.form, 
        toDos: [ ...this.state.toDos, newToDo ]
    })
  }

  toggleCompleted = id => {
    //map over array, when item we clicked is found, toggle completed field
    // else return item 
    this.setState({
      toDos: this.state.toDos.map( toDo => {
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
        <Form onChange={ this.changeInput } values={ this.state.form }  onSubmit={ this.addToDo } />
      </>
    )
  }
}
