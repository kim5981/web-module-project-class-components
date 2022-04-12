import React from 'react'

// takes in to-do data and displays task to screen

export default class Todo extends React.Component {
  render() {
    const { task, toggleCompleted } = this.props;
    return (
      <div
         className={ ` task${ task.completed ? "completed" : "" } ` }
        onClick={ () => toggleCompleted( task.id ) }
      >
        <li> { task.taskName } </li>
      </div>
    )
  }
}
