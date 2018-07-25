import React, { PureComponent } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends PureComponent {
  render() {
    const { todos, actions } = this.props;
    return todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} {...actions} />
    ));
  }
}