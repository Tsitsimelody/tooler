import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class TodoApp extends Component {
  state = {
    todos: [
      { id: 1, text: "First Todo", completed: false },
      { id: 2, text: "Second Todo", completed: false },
      { id: 3, text: "Third Todo", completed: false }
    ],
    text: ""
  };

  addTodo = e => {
    e.preventDefault();

    this.setState(prevState => {
      const todos = prevState.todos;
      return {
        todos: [
          ...todos,
          { id: Date.now(), text: prevState.text, completed: false }
        ]
      };
    });
  };

  deleteTodo = todo => {
    this.setState(prevState => {
      const [todo, ...rest] = prevState.todos;
      return {
        todos: rest,
        deleted: todo
      };
    });
  };

  completeTodo = todo => {
    this.setState(prevState => {
      const [todo, ...rest] = prevState.todos;
      const todoIsComplete = todo.completed;
      return {
        todos: [...rest, { ...todo, completed: !todoIsComplete }]
      };
    });
  };

  render() {
    const { todos, text } = this.state;
    return (
      <div style={{ maxWidth: "200px", margin: "0 auto", marginTop: "50px" }}>
        <h1> Todo App </h1>
        <TodoForm
          addTodo={this.addTodo}
          text={text}
          onChange={e => this.setState({ text: e.target.value })}
        />
        <TodoList
          todos={todos}
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default TodoApp;
