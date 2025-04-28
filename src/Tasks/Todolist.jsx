import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  handleChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = () => {
    if (this.state.newTodo.trim() !== '') {
      this.setState(prevState => ({
        todos: [...prevState.todos, prevState.newTodo],
        newTodo: ''
      }));
    }
  };

  deleteTodo = (index) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter((_, i) => i !== index)
    }));
  };

  render() {
    return (
      <div style={{ margin: '50px', textAlign: 'center' }}>
        <h1>Todo List</h1>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChange}
          placeholder="Enter a new todo"
        />
        <button onClick={this.addTodo} style={{ marginLeft: '10px' }}>
          Add
        </button>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {this.state.todos.map((todo, index) => (
            <li key={index} style={{ margin: '10px 0' }}>
              {todo}
              <button
                onClick={() => this.deleteTodo(index)}
                style={{ marginLeft: '10px', color: 'red' }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
