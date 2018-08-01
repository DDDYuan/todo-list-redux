import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";

export const TodoList = ({ todos }) => (
  <div className="input-group mb-3">
    {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
  </div>
);

export default connect(state => ({
  todos: state.todos.filter(todo => todo.visible === true)
}))(TodoList);
