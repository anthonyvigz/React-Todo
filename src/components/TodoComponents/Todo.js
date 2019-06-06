import React from "react";

const Todo = props => {
  return (
    <h1
      style={
        props.todoitem.completed
          ? { textDecoration: "line-through", background: "lightblue" }
          : null
      }
      onClick={() => props.todoToggle(props.todoitem.id)}
    >
      {props.todoitem.task}
    </h1>
  );
};

export default Todo;
