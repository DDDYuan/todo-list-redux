import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import FilterForm from "./FilterForm";

const Todos = () => {
  return (
    <div className="container">
      <FilterForm />
      <TodoList />
      <AddTodoForm />
    </div>
  );
};

export default Todos;
