import React from "react";
import { connect } from "react-redux";
import { goBack } from "connected-react-router";

export const TodoItemInfo = ({ todo, goBack }) => {
  if (todo)
    return (
      <div className="container justify-content-center text-center">
        <h2 className="mb-3">Todo Item Detail</h2>
        <div className="list-group">
          <div className="list-group-item d-flex justify-content-between align-items-center row">
            <span className="badge badge-primary col-3">ID</span>
            {todo.id}
          </div>
          <div className="list-group-item d-flex justify-content-between align-items-center row">
            <span className="badge badge-primary col-3">CONTENT</span>
            {todo.value}
          </div>
          <div className="list-group-item d-flex justify-content-between align-items-center row">
            <span className="badge badge-primary col-3">COMPLETE</span>
            {todo.checked ? "YES" : "NO"}
          </div>
          <div className="list-group-item d-flex justify-content-between align-items-center row mb-3">
            <span className="badge badge-primary col-3">TIMESTAMP</span>
            {todo.timestamp}
          </div>
          <button
            className="btn btn-block btn-outline-primary"
            onClick={goBack}
          >
            GO BACK
          </button>
        </div>
      </div>
    );
  return <h1 className="text-center">THIS TODO IS NOT FOUND！</h1>;
};

export default connect(
  (state, match) => {
    const id = parseInt(match.match.params.id, 10);
    return {
      todo: state.todos.find(todo => todo.id === id)
    };
  },
  { goBack }
)(TodoItemInfo);
