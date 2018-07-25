import React, { PureComponent } from "react";

export default class UserInfo extends PureComponent {
  render() {
    const { name } = this.props;
    return (
      <div className="col row">
        <h4 className="col-6">
          <span className="badge badge-info">USERNAME</span>
          {name}
        </h4>
        <h4 className="col">
          <span className="badge badge-primary">OTHERS</span>
          ......
        </h4>
      </div>
    );
  }
}
