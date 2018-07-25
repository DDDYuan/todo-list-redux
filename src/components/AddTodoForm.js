import React, { PureComponent } from "react";

export default class AddTodoForm extends PureComponent {
  constructor(props) {
    super(props);
    this.input = null;
  }

  render() {
    const { addTodo } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Input To Add a Item"
          ref={node => (this.input = node)}
        />
        <button
          onClick={() => {
            if (this.input.value.trim().length > 0) {
              addTodo(this.input.value.trim());
            }
            this.input.value = "";
          }}
        >
          ADD
        </button>
      </div>
    );
  }
}
