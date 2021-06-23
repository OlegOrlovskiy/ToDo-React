import { Component } from "react";

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleUpdate = (event) => {
    this.setState({value: event.target.value});
  }
  
  handleKeyUp = (event) => {
    if (event.keyCode === 13 && this.state.value.length) {
      this.props.addTodo(this.state.value);
      this.setState({ value: "" });
    }
  }

  addTodo = () => {
    if (this.state.value.length) {
      this.props.addTodo(this.state.value);
      this.setState({ value: "" });
    }
  }


  render() {

    return (
      <form>    
        <h2 className="visually-hidden">Navigate through your to-do tasks</h2>
        <nav className="nav">
          <ul className="nav__tabs">
            <li id="allTasks" data-f="all" className="nav__tab" tabIndex="0">All</li>
            <li id="activeTasks" data-f="active" className="nav__tab" tabIndex="0">Active</li>
            <li id="doneTasks" data-f="done" className="nav__tab" tabIndex="0">Done</li>
          </ul>
        </nav>
        <section className="add-container">
          <label htmlFor="inputTask" className="input-label">New task</label>  
          <textarea 
            value={this.state.value} 
            onChange={this.handleUpdate} 
            onKeyUp={this.handleKeyUp} 
            id="inputTask" 
            className="todo-input" 
            aria-label="Enter a new todo task" 
            placeholder="Enter a new task...">
          </textarea>   
          <button onClick={this.addTodo} type="button" className="add-button">ADD</button>
        </section>
      </form>
    )
  }  
}

export default Form;