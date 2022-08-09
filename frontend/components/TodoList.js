import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
      <ul>
      {
        this.props.items.map(item => (
          <Todo
          key={item.id}
          item={item}
          />
        ))
      }
      </ul>
      </div>
    )
  }
}
