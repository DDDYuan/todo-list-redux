import React from "react";
import Todos from "./Todos";
import User from "./User";
import { initTodoList } from "../actions";
import { connect } from "react-redux";

export const App = ({ initTodoList }) => {
  fetch("/api/todos")
    .then(response => response.json())
    .then(json => initTodoList(json));
  return (
    <div className="justify-content-center text-center">
      <h1 className="mb-3">Todo List</h1>
      <User />
      <Todos />
    </div>
  );
};

export default connect(
  null,
  { initTodoList }
)(App);
