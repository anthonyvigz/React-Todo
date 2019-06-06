import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.todoitems.todos.map(todo => {
        return (
          <Todo todoToggle={props.todoToggle} key={todo.id} todoitem={todo} />
        );
      })}
    </div>
  );
};

export default TodoList;
