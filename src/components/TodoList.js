import { Component } from "react";
import Todo from './Todo';


class TodoList extends Component {

  render() {
    const todos = this.props.todos.map((todo, index) => {

      return (
        <Todo 
          todoIndex={todo.id}
          todo={todo}
          removeTodo={this.props.removeTodo}
          updateTodo={this.props.updateTodo}
          key={index}
        />
      )
    });

    return(
      <div className="todos-container">
        <h2 className="visually-hidden">List of your to-do tasks</h2>
        <ul id="todoList" className="todo-list">
          {todos && todos.length ? (
            todos
          ) : (
              <li className="todo-placeholder">
                You haven't added any todo's yet. Go ahead!
              </li>
            )}
        </ul>
      </div>
    )

  }
}

export default TodoList;
