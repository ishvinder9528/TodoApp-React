import React from "react";

const Todo = (props) => {
  return (
    <p>
      {props.todo.task}
      <span>
        <button>Edit</button>
      </span>
      <span>
        <button
          onClick={() => {
            console.log(props.todo.task);
          }}
        >
          Delete
        </button>
      </span>
    </p>
  );
};

export default Todo;
