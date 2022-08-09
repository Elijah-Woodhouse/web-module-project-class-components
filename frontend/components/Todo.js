import React from 'react'
import Form from "./Form"

export default class Todo extends React.Component {
  render() {
    return (
      <li>
      {this.props.item.name} {this.props.item.completed ? <span>- completed</span> : <span></span>}<button>delete</button>
      </li>)
  }
}
