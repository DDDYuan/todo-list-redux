import React from "react";

const TodoItem = ({
  todo,
  checkTodo,
  removeTodo,
  editTodo,
  editableStatus,
  setDetailTodo,
  history
}) => {
  let input;

  const onSave = () => {
    if (input.value.trim().length > 0) {
      editTodo(todo.id, input.value);
    } else {
      input.value = todo.value;
    }
    editableStatus(todo.id, false);
  };
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
        style={todo.checked ? { textDecoration: "line-through" } : {}}
        ref={node => (input = node)}
        onKeyDown={e => {
          if (e.keyCode === 13) onSave();
        }}
        onBlur={onSave}
        onClick={() => {
          setDetailTodo(todo.id);
          history.push("/todo");
        }}
      />
      <button
        className="btn btn-info rounded-0"
        onClick={() => {
          if (!todo.checked) editableStatus(todo.id, true);
          input.focus();
        }}
      >
        EDIT
      </button>
      <div className="input-group-append">
        <button className="btn btn-danger" onClick={() => removeTodo(todo.id)}>
          ×
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
