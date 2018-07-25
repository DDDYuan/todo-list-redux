import React from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

const User = ({ avatar, name }) => (
  <div>
    <Avatar avatar={avatar} />
    <UserInfo name={name} />
  </div>
);

export default User;
