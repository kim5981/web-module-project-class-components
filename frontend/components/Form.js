import React from 'react'

// holds input fields, Add To-do btn and Clear Completed btn
// input takes in user input, allows to press enter and option to submit w btn
// to-do list should re-render w added to-do item

export default class Form extends React.Component {
  //set state for form
  constructor () {
    super()
    this.state = {
      taskText: ""
    }
  }

  onSubmit = evt => {
    evt.preventDefault()
    this.props.onSubmit()
  }

  onChange = evt => {
    this.setState({
      taskText: evt.target.value
    })
  }

  render() {

    const { taskText } = this.state; 

    return (
    <>
      <div>
        <form onSubmit={ this.onSubmit }>
          <ul></ul>
          <input
            id="todoInput"
            type="text"
            placeholder="type to-do"
            value={ taskText }
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
