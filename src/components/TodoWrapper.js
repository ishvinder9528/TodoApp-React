import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo,index)=>(
        <Todo todo={todo} key={index}/>
        ))}
      <Todo />
    </div>
  );
};

export default TodoWrapper;
