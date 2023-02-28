import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
export const TodoWrapper = () => {
  const [todos, SetTodos] = useState([]);

  const addTodo = (todo) => {
    SetTodos([
      ...todos,
      { id: uuidv4(), task: todo, Completed: false, isEditing: false }
    ]);
    console.log(todos);
  };

  const deleteTodo = (todos) => {};

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} deleteTodo={deleteTodo} key={index} />
      ))}
    </div>
  );
};
// export default TodoWrapper;
