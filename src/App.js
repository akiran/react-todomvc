import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { TodoContext } from "./context";

const defaultTodos = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Learn CSS", completed: true },
];

function NotesFeature() {
  return <div>notes</div>;
}

function TodoFeature() {
  const [todos, setTodos] = useState(defaultTodos);

  function addTodo(todo) {
    const newTodos = todos.concat(todo);
    setTodos(newTodos);
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function toggle(id) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  }
  return (
    <TodoContext.Provider value={{ toggle, deleteTodo, addTodo }}>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodoInput />
        </header>
        <div className="main">
          <TodoList todos={todos} />
        </div>
      </section>
    </TodoContext.Provider>
  );
}

function App() {
  const [user] = useState({});
  return (
    <>
      <TodoFeature />
      <NotesFeature />
    </>
  );
}

export default App;
