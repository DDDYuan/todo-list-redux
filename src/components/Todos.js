import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import FilterForm from "./FilterForm";

const Todos = ({ todosToBeShown, actions }) => (
  <div className="container">
    <FilterForm {...actions} />
    <TodoList todos={todosToBeShown} actions={actions} />
    <AddTodoForm {...actions} />
  </div>
);

export default Todos;
