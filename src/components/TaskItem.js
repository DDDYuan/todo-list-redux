import React from "react";

export const TaskItem = ({ task }) => (
  <div className="input-group mb-0">
    <div className="input-group-prepend">
      <div className="input-group-text">TASK</div>
    </div>
    <input
      className="form-control"
      type="text"
      readOnly="true"
      value={task.content}
    />
  </div>
);

export default TaskItem;
