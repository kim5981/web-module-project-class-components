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
  render() {
    return (
      <>
        <Form />
      </>
    )
  }
}
