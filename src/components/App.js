import React from "react";
import TodosContainer from "../containers/TodosContainer";
import UserContainer from "../containers/UserContainer";

const App = () => (
  <div className="justify-content-center text-center">
    <h1>Todo List</h1>
    <UserContainer />
    <TodosContainer />
  </div>
);

export default App;
