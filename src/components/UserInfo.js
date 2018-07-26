import React from "react";
import { connect } from "react-redux";

export const UserInfo = ({ name }) => (
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

export default connect(state => ({ name: state.user.name }))(UserInfo);
