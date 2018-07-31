import React, { PureComponent } from "react";
import Todos from "./Todos";
import User from "./User";
import { initTodoList } from "../actions";
import { connect } from "react-redux";

export class App extends PureComponent {
  componentDidMount() {
    fetch("/api/todos")
      .then(response => response.json())
      .then(json => this.props.initTodoList(json));
  }

  render() {
    return (
      <div className="justify-content-center text-center">
        <h1 className="mb-3">Todo List</h1>
        <User />
        <Todos />
      </div>
    );
  }
}

export default connect(
  null,
  { initTodoList }
)(App);
