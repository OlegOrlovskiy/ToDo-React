import { Component } from "react";

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = { todo: this.props.todo };
  }

  handleToggleDone = () => {
    this.props.updateTodo({
      id: this.state.todo.id,
      done: !this.state.todo.done,
      important: this.state.todo.important,
      text: this.state.todo.text
    });
  }

  handleToggleImportance = (event) => {
    event.stopPropagation();
    this.props.updateTodo({
      id: this.state.todo.id,
      done: this.state.todo.done,
      important: !this.state.todo.important,
      text: this.state.todo.text
    });
  }

  componentDidUpdate() {
    if (this.props.todo.id !== this.state.todo.id) {
      this.setState({
        todo: this.props.todo
      });
    }
  }

  render() {
    const isDone = this.state.todo.done ? 'todo--done' : '';
    const isImportant = this.state.todo.important ? 'todo--important' : '';
    const btnImportantColor = this.state.todo.important ? 'btn-importance--not' : '';
    const btnImportantText = this.state.todo.important ? 'Not important' : 'Make important';
    const todoTextStyle = this.state.todo.important ? 'todo_text--important' : '';

    return(
      <li 
        className={`todo ${isDone} ${isImportant}`}
        key={this.props.todo.id}
        onClick={this.handleToggleDone}
      >
        <div div className="todo__btns-container" tabIndex="1">
          <button
            onClick={this.handleToggleImportance} 
            type="button" className={`btn-importance ${btnImportantColor}`} 
            tabIndex="0">{btnImportantText}
          </button>
          <button
            onClick={() => this.props.removeTodo(this.state.todo.id)} 
            type ="buttom"
            className="btn-delete" 
            tabIndex="0" 
            aria-label="Delete to-do">
          </button>
        </div>
        <span  
          className={`todo_text ${todoTextStyle}`}
          >{this.state.todo.text}
        </span>
      </li>

    )
  }
}

export default Todo;