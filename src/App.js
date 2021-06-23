import React from "react";
import './App.css';
import { v4 as uuid } from 'uuid';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Header from './components/Header';

class App extends React.Component {

  constructor(props) {
    super(props);

    let todos;

    if (localStorage.getItem("todos") !== null) {
      todos = JSON.parse(localStorage.getItem("todos"));
    } else {
      todos = [];
    }

    this.state = {
      todos,
    };
  }

  addTodo = (todo) => {
    this.setState((state) => {
      const id = uuid();
      const todos = state.todos.concat({
        id,
        done: false,
        important: false,
        text: todo
      });
      localStorage.setItem("todos", JSON.stringify(todos));
      return {
        todos
      }
    });
  }

  updateTodo = (updatedTodo) => {
    this.setState(
      function (state) {
        const todos = state.todos.map((todo) => {
          if (todo.id === updatedTodo.id) {
            todo.text = updatedTodo.text;
            todo.done = updatedTodo.done;
            todo.important = updatedTodo.important;
          }

          return todo
        });
        return { todos };
      },
      () => {
        localStorage.removeItem("todos");
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    );
  }

  removeTodo = (id) => {
    console.log('id', id);
    this.setState(
      (state) => {
        const todos = state.todos.filter((todo) => todo.id !== id);

        return {
          todos: todos
        }
      },
      () => {
        localStorage.removeItem("todos");
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    );
  }


  render() {
    return (
      <div className="App">      
        <Header />
        <Form 
          addTodo={this.addTodo}         
        />
        <TodoList 
          todos={this.state.todos}
          removeTodo={this.removeTodo}
          updateTodo={this.updateTodo}
        />      
      </div>
    );
  }  
}

export default App;
