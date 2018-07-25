import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import FilterForm from "./FilterForm";

const Todos = ({ todosToBeShown, actions }) => (
  <div>
    <FilterForm {...actions} />
    <TodoList todos={todosToBeShown} actions={actions} />
    <AddTodoForm {...actions} />
  </div>
);

export default Todos;
