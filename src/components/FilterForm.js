import React from "react";

const FilterForm = ({ filterTodo }) => {
  let input;
  return (
    <div className="row input-group mb-3">
      <input
        className="col-12 form-control"
        type="text"
        placeholder="Input To Filter Todos"
        ref={node => (input = node)}
        onChange={() => filterTodo(input.value.trim())}
      />
    </div>
  );
};

export default FilterForm;
