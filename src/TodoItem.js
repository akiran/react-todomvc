import React, { useContext } from "react";
import { TodoContext } from "./context";

export default function TodoItem({ todo, onDelete }) {
  const { toggle, deleteTodo } = useContext(TodoContext);
  return (
    <li className={todo.completed ? "completed" : null}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggle(todo.id)}
        />
        <label>{todo.title}</label>
        <button className="destroy" onClick={() => deleteTodo(todo.id)} />
      </div>
    </li>
  );
}
