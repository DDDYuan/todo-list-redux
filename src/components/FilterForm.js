import React from "react";
import { connect } from "react-redux";
import { filterTodo } from "../actions/index";

export const FilterForm = ({ filterTodo }) => {
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

export default connect(
  null,
  { filterTodo }
)(FilterForm);
