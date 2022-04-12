import React from 'react'
import Task from "./Todo"
// receives to-do array iterating over list generating a new to-do for e/ elem in arr

export default class TodoList extends React.Component {

  render() {
    const { toggleCompleted, tasks } = this.props; 
    return (
      <div className="to-do-list">
        <ul>
          { tasks.map( task => (
            <Task key={ task.id } toggleCompleted={ toggleCompleted }  task={ task } />
          ) ) }
        </ul>
      </div>
    )
  }
}
