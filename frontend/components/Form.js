import React from 'react'

// holds input fields, Add To-do btn and Clear Completed btn
// input takes in user input, allows to press enter and option to submit w btn
// to-do list should re-render w added to-do item

export default class Form extends React.Component {

  onSubmit = evt => {
    evt.preventDefault()
  }

  onChange = evt => {

  }

  render() {

    return (
    <>
          <h1> To-Do:</h1>
      <div>
        <form onSubmit={ this.onSubmit }>
          <ul></ul>
          <input
            id="todoInput"
            type="text"
            placeholder="type to-do"
            value=""
            onChange={ this.onChange }
          />
          <button> submit </button>
        </form>
       </div>
       <button> completed {/** ternary to show/ hide completed  */} </button>
    </>
    )
  }
}
