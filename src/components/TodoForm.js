import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <>
      <div className="TodoForm">
        <form>
          <input
            className="todo-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Whats Your Plan For Today"
          />
          <button onClick={handleSubmit} className="todo-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
