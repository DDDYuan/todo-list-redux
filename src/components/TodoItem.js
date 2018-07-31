import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import {
  checkTodo,
  removeTodo,
  editTodo,
  editableStatus
} from "../actions/index";

export const TodoItem = ({
  todo,
  checkTodo,
  removeTodo,
  editTodo,
  editableStatus,
  push
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
      <div className="input-group-prepend">
        <div className="input-group-text">
          <input
            type="checkbox"
            defaultChecked={todo.checked}
            onChange={() => checkTodo(todo.id)}
          />
        </div>
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
        onClick={() => push(`/todo/${todo.id}`)}
      />
      <button
        className="btn btn-info rounded-0"
        onClick={() => {
          if (!todo.checked) {
            editableStatus(todo.id, true);
            input.focus();
          }
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

export default connect(
  null,
  {
    push,
    checkTodo,
    removeTodo,
    editTodo,
    editableStatus
  }
)(TodoItem);
