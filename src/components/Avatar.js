import React from "react";
import { connect } from "react-redux";

export const Avatar = ({ avatar }) => (
  <div className="col-2">
    <img src={avatar} alt={avatar} className="rounded" />
  </div>
);

export default connect(state => ({ avatar: state.user.avatar }))(Avatar);
