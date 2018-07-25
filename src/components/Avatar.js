import React, { PureComponent } from "react";

export default class Avatar extends PureComponent {
  render() {
    const { avatar } = this.props;
    return (
      <div>
        <img src={avatar} alt={avatar} />
      </div>
    );
  }
}
