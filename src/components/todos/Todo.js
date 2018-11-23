import React from "react";

const Todo = ({ todo, completeTodo, deleteTodo }) => (
  <div
    style={{
      padding: "10px 0",
      borderBottom: "1px solid lightgray",
      display: "flex",
      justifyContent: "space-between"
    }}
  >
    <div
      onClick={() => completeTodo(todo)}
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "none"
      }}
    >
      {todo.text}
    </div>

    <button onClick={() => deleteTodo(todo)}> x </button>
  </div>
);

export default Todo;
