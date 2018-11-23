import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, completeTodo, deleteTodo }) => (
  <div>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        todo={todo}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    ))}
  </div>
);

export default TodoList;
