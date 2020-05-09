import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
