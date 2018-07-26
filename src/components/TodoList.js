import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, actions }) => (
  <div className="row input-group mb-3">
    {todos.map(todo => <TodoItem key={todo.id} todo={todo} {...actions} />)}
  </div>
);

export default TodoList;
