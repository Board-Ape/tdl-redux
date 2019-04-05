import React from 'react';

const todos = ({todos, deleteTodo, submitFavorites}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => deleteTodo(todo.id)}>
                        {todo.content}  
                    </span>
                    <button onClick={() => submitFavorites(todo.id)}>Favorite</button>
                </div>
            )
        }) 
    ) : (
        <p>You have no todo's left</p>
    )
 
    return (
        <div className="todos collection"> 
            {todoList}
        </div>
    )
}

export default todos;