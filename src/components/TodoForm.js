import React, { useState } from "react";

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  var handleSubmit=(e)=>{
    e.preventDefault();
    addTodo(value)
    setValue('');
  }
  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter Your Todo..."
      />{' '}
      <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
