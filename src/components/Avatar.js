import React from "react";

const Avatar = ({ avatar }) => (
  <div className="col-2">
    <img src={avatar} alt={avatar} className="rounded" />
  </div>
);

export default Avatar;
