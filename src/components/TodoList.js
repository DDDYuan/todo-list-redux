import React from "react";

const TodoList = ({ todosToBeShown, actions }) => {
  const { checkTodo, removeTodo, editTodo } = actions;
  return todosToBeShown.map(todo => (
    <div key={todo.id}>
      <input
        type="checkbox"
        defaultChecked={todo.checked}
        onChange={() => checkTodo(todo.id)}
      />
      <input
        type="text"
        defaultValue={todo.value}
        readOnly="true"
        disabled={todo.checked}
      />
      <button onClick={() => removeTodo(todo.id)}>×</button>
    </div>
  ));
};

export default TodoList;
