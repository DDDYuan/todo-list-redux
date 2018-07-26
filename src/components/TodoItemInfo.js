import React from "react";
import { connect } from "react-redux";

export const TodoItemInfo = ({ history, todo }) => (
  <div>
    <h4>Todo Item Detail</h4>
    <div>{todo.id}</div>
    <div>{todo.value}</div>
    <div>{todo.checked}</div>
    <div>{todo.timestamp}</div>
    <button onClick={() => history.goBack()}>GO BACK</button>
  </div>
);

export default connect(state => ({
  todo: state.todos.find(todo => todo.id === state.detail)
}))(TodoItemInfo);
