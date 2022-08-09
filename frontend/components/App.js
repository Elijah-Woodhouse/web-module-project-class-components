import React from 'react'
import axios from 'axios'
import Form from "./Form"
import Todo from "./Todo"
import TodoList from "./TodoList"

const timestamp = Date.now();

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [{
        name: 'Organize Garage',
        id: 1528817077286, // could look different, you could use a timestamp to generate it
        completed: false
      },
      {
        name: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      },
    ],
      error: "No error (:",
      addTask: "",

    }
  }


  render() {

    const { items } = this.state;
    console.log(items);

    return (
      <div>
        Todo App
        <TodoList
        items={items}
        />
        <Form

        />
      </div>
    )
  }
}
