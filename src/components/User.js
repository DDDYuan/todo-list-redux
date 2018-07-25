import React from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

const User = ({ avatar, name }) => (
  <div className="container row align-items-center mb-5 border">
    <Avatar avatar={avatar} />
    <UserInfo name={name} />
  </div>
);

export default User;
