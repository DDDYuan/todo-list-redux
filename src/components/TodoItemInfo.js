import React from "react";
import { connect } from "react-redux";

export const TodoItemInfo = ({ history, todo }) => {
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
            onClick={() => history.goBack()}
          >
            GO BACK
          </button>
        </div>
      </div>
    );
  return <h1 className="text-center">只能通过点击TODO进入此页面！</h1>;
};

export default connect(state => ({
  todo: state.todos.find(todo => todo.id === state.detail)
}))(TodoItemInfo);
