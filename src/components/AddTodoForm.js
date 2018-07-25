import React from "react";

const AddTodoForm = ({ actions }) => (
  <div>
    <input type="text" placeholder="Input To Add a Item" />
    <button onClick={() => actions.addTodo("123")}>ADD</button>
  </div>
);

export default AddTodoForm;
