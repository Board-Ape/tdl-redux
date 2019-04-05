import React, { Component } from 'react';
import './App.css';
import Todos from './Todos';
import AddForm from './AddForm';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Buy some milk'},
      {id: 2, content: 'Watch movies with friends'}
    ]
  }

  deleteTodo = (id) => {
    console.log(id)
    const todos = this.state.todos.filter(todo => todo.id !== id)

    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]

    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app contaner">
        <header className="App-header">
          <h1 className="center blue-text">Todo's</h1>
        </header>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;