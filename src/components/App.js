import React from "react";
import TodosContainer from "../containers/TodosContainer";
import UserContainer from "../containers/UserContainer";

const App = ({ history }) => (
  <div className="justify-content-center text-center">
    <h1 className="mb-3">Todo List</h1>
    <UserContainer />
    <TodosContainer history={history} />
  </div>
);

export default App;
