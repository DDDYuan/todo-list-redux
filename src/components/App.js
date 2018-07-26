import React from "react";
import Todos from "./Todos";
import User from "./User";

const App = () => (
  <div className="justify-content-center text-center">
    <h1 className="mb-3">Todo List</h1>
    <User />
    <Todos />
  </div>
);

export default App;
