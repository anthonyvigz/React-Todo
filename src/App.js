import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "wash the floor",
          id: Date.now(),
          completed: false
        },
        {
          task: "cook lobster",
          id: Date.now() + 1,
          completed: false
        }
      ],
      todo: ""
    };
  }
  
  addItem = event => {
    event.preventDefault();
    let newTodo = { task: this.state.todo, id: Date.now(), completed: false };
    this.setState({ todos: [...this.state.todos, newTodo], todo: "" });
  };

  changeHandler = event => {
    this.setState({ todo: event.target.value });
  };

  todoToggle = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompleted = event => {
    event.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };
  
  render() {
    return (
      <div>
        <TodoList todoitems={this.state} todoToggle={this.todoToggle} />
        <TodoForm
          addHandler={this.addItem}
          changeHandler={this.changeHandler}
          value={this.state.todo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
