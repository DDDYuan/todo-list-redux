import React from "react";
import { connect } from "react-redux";
import { logIn } from "../actions";

export const Login = ({ logIn }) => {
  let username, password;
  const onLogin = () => {
    logIn(username.value, password.value);
    username.value = "";
    password.value = "";
  };
  return (
    <div className="justify-content-center text-center">
      <h1 className="mb-3">LOGIN</h1>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Username</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            ref={node => (username = node)}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            ref={node => (password = node)}
          />
        </div>
      </div>
      <button className="btn btn-block btn-primary" onClick={onLogin}>
        LOGIN
      </button>
    </div>
  );
};

export default connect(
  null,
  { logIn }
)(Login);
