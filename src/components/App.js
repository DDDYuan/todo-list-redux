import React from "react";
import UserContainer from "../containers/UserContainer";
import Todos from "./Todos";

const App = () => (
  <div className="justify-content-center text-center">
    <h1 className="mb-3">Todo List</h1>
    <UserContainer />
    <Todos />
  </div>
);

export default App;
