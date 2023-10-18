import React from "react";
import NewTaskForm from "../Task/newTaskForm";
import TaskCart from "../Task";
import { ApiResponse } from "./tasks.types";

const TasksList: React.FC<ApiResponse> = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskCart {...task} />
      ))}
      <NewTaskForm />
    </>
  );
};

export default TasksList;
