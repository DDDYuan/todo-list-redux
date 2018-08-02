import React, { PureComponent } from "react";
import Todos from "./Todos";
import User from "./User";
import { getTodoList, getUserInfo } from "../actions";
import { connect } from "react-redux";

export class App extends PureComponent {
  componentWillMount() {
    this.props.getTodoList();
    this.props.getUserInfo();
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
  { getTodoList, getUserInfo }
)(App);
