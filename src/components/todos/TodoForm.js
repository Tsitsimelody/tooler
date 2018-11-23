import React from "react";

const TodoForm = ({ text, onChange, addTodo }) => (
  <form style={{ marginBottom: "10px" }} onSubmit={addTodo}>
    <input type="text" onChange={onChange} value={text} />
    <button> + </button>
  </form>
);

export default TodoForm;
