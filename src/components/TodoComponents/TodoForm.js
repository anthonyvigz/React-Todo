import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input type="text" onChange={props.changeHandler} value={props.value} />
      <button onClick={props.addHandler}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
