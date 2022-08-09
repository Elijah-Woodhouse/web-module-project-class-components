import React from 'react'

export default class Form extends React.Component {

  onSubmit = evt => {
  evt.preventDefault()
  this.props.onSubmit()
}

onChange = evt => {
  const { value, id } = evt.target
  this.props.onChange(id, value)
}

render() {
  return (
    <form onSubmit={this.onSubmit}>
      <input
        type="text"
        id="textInput"
        placeholder="Task"
        value={this.props.addTask}
        onChange={this.onChange}
      />
      <input type="submit"/>
    </form>
  )
}
}
