import React, { PureComponent } from "react";

export default class UserInfo extends PureComponent {
  render() {
    const { name } = this.props;
    return (
      <div className="col-8">
        <h4>USERNAME:</h4>
        <h3>{name}</h3>
      </div>
    );
  }
}
