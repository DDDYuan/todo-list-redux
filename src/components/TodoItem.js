import React from "react";

const TodoItem = ({
  todo,
  checkTodo,
  removeTodo,
  editTodo,
  editableStatus
}) => {
  let input;
  return (
    <div className="input-group mb-1">
      <div className="input-group-prepend input-group-text">
        <input
          type="checkbox"
          defaultChecked={todo.checked}
          onChange={() => checkTodo(todo.id)}
        />
      </div>
      <input
        className="form-control"
        type="text"
        defaultValue={todo.value}
        readOnly={!todo.editable}
        disabled={todo.checked}
        ref={node => (input = node)}
        onDoubleClick={() => editableStatus(todo.id, true)}
        onBlur={() => {
          editTodo(todo.id, input.value);
          editableStatus(todo.id, false);
        }}
      />
      <div className="input-group-append">
        <button className="btn btn-danger" onClick={() => removeTodo(todo.id)}>
          ×
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
