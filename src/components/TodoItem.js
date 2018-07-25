import React, { PureComponent } from "react";

export default class TodoItem extends PureComponent {
  constructor(props) {
    super(props);
    this.input = null;
  }
  render() {
    const {
      todo,
      checkTodo,
      removeTodo,
      editTodo,
      editableStatus
    } = this.props;
    return (
      <div>
        <input
          type="checkbox"
          defaultChecked={todo.checked}
          onChange={() => checkTodo(todo.id)}
        />
        <input
          type="text"
          defaultValue={todo.value}
          readOnly={!todo.editable}
          disabled={todo.checked}
          ref={node => (this.input = node)}
          onDoubleClick={() => editableStatus(todo.id, true)}
          onBlur={() => {
            editTodo(todo.id, this.input.value);
            editableStatus(todo.id, false);
          }}
        />
        <button onClick={() => removeTodo(todo.id)}>×</button>
      </div>
    );
  }
}
