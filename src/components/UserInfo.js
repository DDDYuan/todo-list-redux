import React from "react";
import { connect } from "react-redux";
import { logOut } from "../actions";

export const UserInfo = ({ name, logOut }) => (
  <div className="col row">
    <h4 className="col-6">
      <span className="badge badge-info">USERNAME</span>
      {name}
    </h4>
    <h4 className="col">
      <span className="badge badge-primary">OTHERS</span>
      ......
    </h4>
    <button className="col-2 btn btn-outline-warning" onClick={logOut}>
      LOGOUT
    </button>
  </div>
);

export default connect(
  state => ({ name: state.user.name }),
  { logOut }
)(UserInfo);
