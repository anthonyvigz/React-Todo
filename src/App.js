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
