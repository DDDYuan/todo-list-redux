import React from "react";
import { connect } from "react-redux";
import { saveTodo } from "../actions/index";

export const AddTodoForm = ({ saveTodo }) => {
  let input;
  const onAdd = () => {
    if (input.value.trim().length > 0) {
      saveTodo(input.value.trim());
    }
    input.value = "";
  };

  return (
    <div className="row input-group mb-3">
      <input
        className="form-control"
        type="text"
        placeholder="Input To Add a Item"
        ref={node => (input = node)}
        onKeyDown={e => {
          if (e.keyCode === 13) onAdd();
        }}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" onClick={onAdd}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default connect(
  null,
  { saveTodo }
)(AddTodoForm);
