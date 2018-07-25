import React, { PureComponent } from "react";

export default class AddTodoForm extends PureComponent {
  constructor(props) {
    super(props);
    this.input = null;
  }

  render() {
    const { addTodo } = this.props;
    return (
      <div className="row input-group mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Input To Add a Item"
          ref={node => (this.input = node)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
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
      </div>
    );
  }
}
