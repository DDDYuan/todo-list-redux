import React, { PureComponent } from "react";

export default class UserInfo extends PureComponent {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h3>{name}</h3>
      </div>
    );
  }
}
