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
    todoInput:  ""
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
      todoInput: this.state.todoInput
    }

    this.setState({
      ...this.state,
        form: initialList.form, 
        toDos: [ ...toDos, newToDo ]
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
