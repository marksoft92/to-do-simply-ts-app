import React from "react";
import { TaskCartProps } from "./task.props";

const TaskCart: React.FC<TaskCartProps> = ({ id, description, status }) => {
  return (
    <>
      <div>{description}</div>
    </>
  );
};

export default TaskCart;
