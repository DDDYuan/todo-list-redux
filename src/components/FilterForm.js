import React, { PureComponent } from "react";

export default class FilterForm extends PureComponent {
  constructor() {
    super();
    this.input = null;
  }

  render() {
    const { filterTodo } = this.props;
    return (
      <div className="row input-group mb-3">
        <input
          className="col-12 form-control"
          type="text"
          placeholder="Input To Filter Todos"
          ref={node => (this.input = node)}
          onChange={() => filterTodo(this.input.value.trim())}
        />
      </div>
    );
  }
}
