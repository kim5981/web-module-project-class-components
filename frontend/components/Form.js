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
    this.props.addTask(evt, this.state.taskName)
    this.setState({
      taskText: ""
    })
  };

  onChange = evt => {
    this.setState({
      taskText: evt.target.value
    })
  };

  render() {

    const { taskText } = this.state; 

    return (
      <>
        <form onSubmit={ this.onSubmit }>
          <input
            type="text"
            name="task"
            placeholder="type to-do"
            value={ taskText }
            onChange={ this.onChange }
          />
          <button> add task </button>
        </form>
    </>
    )
  }
}
