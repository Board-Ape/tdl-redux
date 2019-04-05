import React, { Component } from 'react';
import './App.css';
import Todos from './Todos';
import AddForm from './AddForm';
import Favorites from './Favorites';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Buy some milk'},
      {id: 2, content: 'Watch movies with friends'}
    ],
    favorites: []
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

  submitFavorites = (id) => {
    console.log(id)
    const found = this.state.favorites.find(favorite => favorite.id === id)
    if (found) {
      return alert('Favorite already exists')
    }

    const addFavorite = this.state.todos.filter(favorite => favorite.id === id)
    console.log(addFavorite)
    const newState = [...this.state.favorites, ...addFavorite]

    this.setState({
      favorites: newState
    })
  } 

  render() {
    return (
      <div className="todo-app contaner">
        <header className="App-header">
          <h1 className="center blue-text">Todo's</h1>
        </header>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} submitFavorites={this.submitFavorites}/>
        <AddForm addTodo={this.addTodo}/>
        <Favorites favorites={this.state.favorites}/>
      </div>
    );
  }
}

export default App;