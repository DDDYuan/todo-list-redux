import React, { PureComponent } from "react";

export default class Avatar extends PureComponent {
  render() {
    const { avatar } = this.props;
    return (
      <div className="col-2">
        <img src={avatar} alt={avatar} className="rounded" />
      </div>
    );
  }
}
