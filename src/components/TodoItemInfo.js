import React from "react";

const TodoItemInfo = ({ history }) => {
  return (
    <div>
      <h4>Todo Item Detail</h4>
      {/* <div>{todo.id}</div>
      <div>{todo.value}</div>
      <div>{todo.checked}</div>
      <div>{todo.timestamp}</div> */}
      <button onClick={() => history.goBack()}>GO BACK</button>
    </div>
  );
};

export default TodoItemInfo;
