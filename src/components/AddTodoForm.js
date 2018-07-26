import React from "react";

const AddTodoForm = ({ addTodo }) => {
  let input;
  const onAdd = () => {
    if (input.value.trim().length > 0) {
      addTodo(input.value.trim());
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

export default AddTodoForm;
